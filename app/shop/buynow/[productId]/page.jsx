'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import Spinner from '@/Components/Spinner';

const ProductPage = () => {
    const params = useParams();
    const productId = params.productId;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`/api/shop/buyme/${productId}`);
                setProduct(res.data.product);
            } catch (error) {
                console.error(error);
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    if (!product) {
        return <Spinner />;
    }

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left - Image */}
                <div className="flex flex-col space-y-6">
                    <div className="bg-gray-50 p-10 rounded-3xl shadow-lg flex justify-center items-center transition-transform hover:scale-[1.02] duration-300">
                        <img
                            src={product.imageUrl || "/placeholder.jpg"}
                            alt={product.title}
                            className="w-full max-w-sm h-80 object-contain transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                </div>

                {/* Right - Details */}
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
                        {product.title}
                    </h1>

                    <div className="flex items-center space-x-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={`h-5 w-5 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                                />
                            ))}
                        </div>
                        <span className="text-gray-500 text-sm">({product.rating})</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-base">
                        {product.description}
                    </p>

                    <div className="flex items-center space-x-4">
                        <span className="text-3xl font-bold text-gray-900">${product.OurPrice}</span>
                        <span className="text-xl text-gray-400 line-through">${product.MarketPrice}</span>
                    </div>

                    <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                        <div className="flex justify-between px-4 py-3 bg-gray-50">
                            <span className="text-gray-700 font-medium">Brand</span>
                            <span className="text-gray-500">Generic</span>
                        </div>
                        <div className="flex justify-between px-4 py-3">
                            <span className="text-gray-700 font-medium">Color</span>
                            <span className="text-gray-500">Multi</span>
                        </div>
                        <div className="flex justify-between px-4 py-3 bg-gray-50">
                            <span className="text-gray-700 font-medium">Category</span>
                            <span className="text-gray-500">Earphone</span>
                        </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl shadow-sm transition-all transform hover:scale-105 active:scale-95">
                            Add to Cart
                        </button>
                        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
