import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductPage = () => {
    return (
        <div className="max-w-6xl p-3 mx-auto bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Images */}
                <div className="space-y-4">
                    {/* Main Product Image */}
                    <div className="bg-gray-100 rounded-2xl p-12 flex justify-center items-center">
                        <img
                            src="\images\console.png"
                            alt="Sony WF-1000XM5"
                            className="w-full max-w-sm h-80 object-contain"
                        />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="space-y-6">
                    {/* Product Title */}
                    <h1 className="text-2xl font-semibold text-gray-800 mb-3">
                        Sony WF-1000XM5
                    </h1>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="flex">
                            {[1, 2, 3, 4].map((star) => (
                                <FaStar key={star} className="w-4 h-4 text-red-500" />
                            ))}
                            <FaStar className="w-4 h-4 text-gray-300" />
                        </div>
                        <span className="text-gray-600 text-sm ml-2">(4.5)</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Sony WF-1000XM5 true wireless earbuds deliver immersive sound
                        with Hi-Res Audio and advanced noise cancellation technology.
                        Designed for comfort and quality, they provide a stable, snug fit for
                        a secure listening experience. Whether you're working out or
                        traveling, these earbuds will keep you connected with the world
                        around you while enjoying rich, clear sound.
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline space-x-3 mb-6">
                        <span className="text-2xl font-semibold text-gray-900">$299.99</span>
                        <span className="text-lg text-gray-400 line-through">$349.99</span>
                    </div>

                    {/* Product Specifications */}
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

                    {/* Buttons */}
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