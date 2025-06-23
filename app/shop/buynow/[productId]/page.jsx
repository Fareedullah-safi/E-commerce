'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

const ProductPage = () => {
    const params = useParams();
    const productId = params.productId;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`/api/shop/buyme/${productId}`);
                console.log(res)
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
        return <p className="p-4">Loading...</p>;
    }

    return (
        <div className="max-w-6xl p-3 mx-auto bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Images */}
                <div className="space-y-4">
                    <div className="bg-gray-100 rounded-2xl p-12 flex justify-center items-center">
                        <img
                            src={product.imageUrl || "/placeholder.jpg"}
                            alt={product.name}
                            className="w-full max-w-sm h-80 object-contain"
                        />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="space-y-6">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-3">
                        {product.name}
                    </h1>

                    <div className="flex items-center space-x-2 mb-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={`w-4 h-4 ${i < product.rating ? "text-red-500" : "text-gray-300"}`}
                                />
                            ))}
                        </div>
                        <span className="text-gray-600 text-sm ml-2">({product.rating})</span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {product.description}
                    </p>

                    <div className="flex items-baseline space-x-3 mb-6">
                        <span className="text-2xl font-semibold text-gray-900">${product.OurPrice}</span>
                        <span className="text-lg text-gray-400 line-through">$349.99</span>
                    </div>

                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-700 font-medium text-sm">Brand</span>
                            <span className="text-gray-500 text-sm">Generic</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-700 font-medium text-sm">Color</span>
                            <span className="text-gray-500 text-sm">Multi</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="text-gray-700 font-medium text-sm">Category</span>
                            <span className="text-gray-500 text-sm">Earphone</span>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-sm">
                            Add to Cart
                        </button>
                        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-sm">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
