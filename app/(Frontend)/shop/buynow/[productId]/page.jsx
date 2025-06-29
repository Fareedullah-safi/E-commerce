'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import Spinner from '@/Lib/Components/Spinner';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

const ProductPage = () => {
    const params = useParams();
    const productId = params.productId;
    const [product, setProduct] = useState(null);

    // Fetch product details based on productId from URL params
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`/api/shop/buyme/${productId}`);
                setProduct(res.data.product);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    // Show loading spinner while product data is being fetched
    if (!product) {
        return <Spinner />;
    }

    // Handle Add to Cart functionality
    const handleClick = async () => {
        try {
            const res = await axios.post("/api/addtocard", product);
            const status = res.data.status;

            // Show appropriate toast based on response status
            if (status === 201) {
                toast.success("Product added to cart successfully.");
            }
            if (status === 409) {
                toast.error("Product already exists in your cart.");
            }
            if (status === 401) {
                toast.error("Please sign in to continue.");
            }
        } catch (error) {
            console.error("Error adding product to cart:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-white">
            <Toaster position="top-center" reverseOrder={false} />

            {/* Product Page Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Product Image Section */}
                <div className="flex flex-col space-y-6">
                    <div className="relative group bg-gradient-to-r from-gray-100 via-white to-gray-100 p-10 rounded-3xl shadow-xl flex justify-center items-center transition-transform hover:scale-105 duration-300 overflow-hidden">

                        {/* Decorative Background Blur Circle */}
                        <div className="absolute w-48 h-48 bg-orange-100 rounded-full blur-3xl opacity-40 -top-10 -left-10"></div>

                        {/* Product Image */}
                        <img
                            src={product.imageUrl || "/placeholder.jpg"}
                            alt={product.title}
                            className="w-full max-w-sm h-80 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
                        />
                    </div>
                </div>


                {/* Product Details Section */}
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
                        {product.title}
                    </h1>

                    {/* Star Rating */}
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

                    {/* Product Description */}
                    <p className="text-gray-600 leading-relaxed text-base">
                        {product.description}
                    </p>

                    {/* Price Details */}
                    <div className="flex items-center space-x-4">
                        <span className="text-3xl font-bold text-gray-900">${product.OurPrice}</span>
                        <span className="text-xl text-gray-400 line-through">${product.MarketPrice}</span>
                    </div>

                    {/* Product Additional Details */}
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

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                        <button
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl shadow-sm transition-all transform hover:scale-105 active:scale-95"
                            onClick={handleClick}
                        >
                            Add to Cart
                        </button>

                        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95">
                            <Link href={"/card"}>
                                Buy Now
                            </Link>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductPage;
