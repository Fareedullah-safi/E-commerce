'use client';

import React, { useState } from 'react';
import SideBar from '@/Components/SideBar';
import axios from 'axios';
import { z } from 'zod';
import { toast, Toaster } from 'react-hot-toast';

const productSchema = z.object({
    id: z.string().min(1, 'Product ID is required'),
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    rating: z
        .string()
        .refine(val => !isNaN(Number(val)), 'Rating must be a number')
        .transform(val => Number(val))
        .refine(val => val >= 0 && val <= 5, {
            message: 'Rating must be between 0 and 5',
        }),
    MarketPrice: z.string(),
    OurPrice: z.string(),
    imageUrl: z.string().url('Must be a valid URL').optional(),
});

const Page = () => {
    const [product, setProduct] = useState({
        id: '',
        title: '',
        description: '',
        rating: '',
        MarketPrice: '',
        OurPrice: '',
        imageUrl: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setErrors({});
            const validated = productSchema.parse(product);

            const res = await axios.post('/api/addproducts', validated);

            if (res.data.success === true) {
                toast.success('Product added successfully!');
                setProduct({
                    id: '',
                    title: '',
                    description: '',
                    rating: '',
                    MarketPrice: '',
                    OurPrice: '',
                    imageUrl: '',
                });
            } else {
                toast.error('Product not saved. Try again.');
            }

        } catch (err) {
            // 🟡 Zod validation errors
            if (err.errors) {
                const errorObj = {};
                err.errors.forEach(e => {
                    errorObj[e.path[0]] = e.message;
                });
                setErrors(errorObj);
                toast.error('Please fix the form errors');
            }
            // 🔴 Axios error handling for 409 conflict
            else if (err.response && err.response.status === 409) {
                toast.error(err.response.data.message || 'ID already exists. Use a different one.');
                setErrors(prev => ({ ...prev, id: 'This ID already exists. Choose a new one.' }));
            }
            else {
                toast.error('Something went wrong. Try again later.');
                console.error(err);
            }
        }
    };

    return (
        <div className="flex">
            <SideBar />
            <Toaster />
            <div className="flex-1 p-4 md:p-8 bg-gray-50 min-h-screen">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-green-600">Add Products</h1>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {[
                            { name: 'title', label: 'Product Title', type: 'text' },
                            { name: 'id', label: 'Product ID', type: 'text' },
                            { name: 'description', label: 'Description', type: 'textarea' },
                            { name: 'rating', label: 'Rating', type: 'text', placeholder: '4.5' },
                            { name: 'MarketPrice', label: 'Market Price', type: 'text', prefix: '$' },
                            { name: 'OurPrice', label: 'Our Price', type: 'text', prefix: '$' },
                            { name: 'imageUrl', label: 'Image URL', type: 'text' },
                        ].map(({ name, label, type, placeholder, prefix }) => (
                            <div key={name}>
                                <label className="block text-sm font-medium mb-1">{label}</label>
                                <div className="relative">
                                    {prefix && (
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                            {prefix}
                                        </span>
                                    )}
                                    {type === 'textarea' ? (
                                        <textarea
                                            autoComplete='off'
                                            name={name}
                                            value={product[name]}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                                        />
                                    ) : (
                                            <input
                                                autoComplete='off'
                                                name={name}
                                                value={product[name]}
                                                onChange={handleChange}
                                                type={type}
                                                placeholder={placeholder || ''}
                                                className={`w-full ${prefix ? 'pl-7' : 'p-3'} p-3 border rounded-lg focus:ring-2 focus:ring-green-500`}
                                            />
                                    )}
                                </div>
                                {errors[name] && (
                                    <p className="text-red-500 text-sm">{errors[name]}</p>
                                )}
                            </div>
                        ))}

                        {product.imageUrl && (
                            <div className="border rounded-lg overflow-hidden">
                                <img
                                    src={product.imageUrl}
                                    alt="Preview"
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            className="cursor-pointer bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 font-medium"
                        >
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
