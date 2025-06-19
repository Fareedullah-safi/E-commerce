'use client';
import React, { useState } from 'react';
import SideBar from '@/Conpunents/SideBar';
import { FiUpload } from 'react-icons/fi';
import axios from 'axios';

const Page = () => {
    const [form, setForm] = useState({
        title: '',
        description: '',
        rating: '',
        MarketPrice: '$',
        OurPrice: '$',
        image: '',
        imageUrl: '',
    });

    const [image, setImage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (name === 'rating') {
            if (value > 5 || value < 0) return;
        }

        if (name === 'price') {
            const raw = value.replace(/[^0-9.]/g, '');
            setForm((prev) => ({
                ...prev,
                price: `$${raw}`,
            }));
            return;
        }

        if (name === 'imageUrl') {
            setForm((prev) => ({
                ...prev,
                imageUrl: value,
                image: value,
            }));
            setImage(value);
            return;
        }

        if (type === 'file') {
            const file = files[0];
            if (file) {
                const localUrl = URL.createObjectURL(file);
                setImage(localUrl);
                setForm((prev) => ({
                    ...prev,
                    image: file.name,
                    imageUrl: '',
                }));
            }
        } else {
            setForm((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async () => {
        try {
            const data = {
                ...form,
            };
            const res = await axios.post('/api/addproducts', data);
            console.log(res)
            if (res.data.success) {
                alert('Product added successfully!');
                setForm({
                    title: '',
                    description: '',
                    rating: '',
                    MarketPrice: '$',
                    OurPrice: '$',
                    image: '',
                    imageUrl: '',
                });
                setImage('');
            } else {
                alert('Failed to add product.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Server Error');
        }
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1 p-4 md:p-8 bg-gray-50 min-h-screen">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-green-600">Add Products</h1>
                    <form className="space-y-6">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Product Title</label>
                            <input
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                type="text"
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                                placeholder="Example: iPhone 14 Pro Max"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Description</label>
                            <textarea
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                rows={4}
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                                placeholder="A16 chip, Pro camera system..."
                            />
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Product Image (Upload or URL)</label>
                            <div className="relative w-full border-2 border-dashed border-gray-300 rounded-xl p-4 hover:border-green-500 bg-white transition group mb-4">
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleChange}
                                    disabled={form.imageUrl !== ''}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                {image ? (
                                    <img src={image} alt="Preview" className="mx-auto h-40 object-contain" />
                                ) : (
                                    <div className="text-center text-gray-500 flex flex-col items-center">
                                        <FiUpload className="text-3xl mb-2" />
                                        <p className="text-sm">Click or drag to upload (JPG, PNG)</p>
                                    </div>
                                )}
                            </div>
                            <input
                                type="text"
                                name="imageUrl"
                                value={form.imageUrl}
                                onChange={handleChange}
                                placeholder="Or paste an image URL (https://...)"
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                                disabled={image && !form.imageUrl}
                            />
                        </div>

                        {/* Rating & Price */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Rating</label>
                                <input
                                    name="rating"
                                    value={form.rating}
                                    onChange={handleChange}
                                    type="number"
                                    min="0"
                                    max="5"
                                    step="0.1"
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                                    placeholder="4.8"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">MarketPrice</label>
                                <input
                                    name="MarketPrice"
                                    value={form.MarketPrice}
                                    onChange={handleChange}
                                    type="text"
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                                    placeholder="$999.99"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">OurPrice</label>
                                <input
                                    name="OurPrice"
                                    value={form.OurPrice}
                                    onChange={handleChange}
                                    type="text"
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                                    placeholder="$999.99"
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 font-medium"
                            >
                                Add Product
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setForm({
                                        title: '',
                                        description: '',
                                        rating: '',
                                        price: '$',
                                        image: '',
                                        imageUrl: '',
                                    });
                                    setImage('');
                                }}
                                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 font-medium"
                            >
                                Clear Form
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
