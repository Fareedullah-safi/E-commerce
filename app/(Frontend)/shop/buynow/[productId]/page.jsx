'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
<<<<<<< HEAD
import Spinner from '@/Lib/Components/Spinner';
=======
import Spinner from '@/Components/Spinner';
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

const ProductPage = () => {
    const params = useParams();
    const productId = params.productId;
    const [product, setProduct] = useState(null);

<<<<<<< HEAD
    // Fetch product details based on productId from URL params
=======
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`/api/shop/buyme/${productId}`);
                setProduct(res.data.product);
            } catch (error) {
<<<<<<< HEAD
                console.error("Error fetching product details:", error);
=======
                console.error(error);
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId]);

<<<<<<< HEAD
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
=======
    if (!product) {
        return <Spinner />;
    }
    // sending data to db in buyme card
    const handleClick = async () => {
        try {
            const res = await axios.post("/api/addtocard", product)
            const errorHandle = res.data.status
            console.log(errorHandle)
            if (errorHandle === 201) {
                toast.success("Product Added to cart")
            }
            if (errorHandle === 409) {
                toast.error("Product already exists in your cart");
            }
        } catch (error) {
            console.log(error)
            console.error("Something went wrong while adding to cart")
        }
    }

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-white">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left - Image */}
                <div className="flex flex-col space-y-6">
                    <div className="bg-gray-50 p-10 rounded-3xl shadow-lg flex justify-center items-center transition-transform hover:scale-[1.02] duration-300">
                        <img
                            src={product.imageUrl || "/placeholder.jpg"}
                            alt={product.title}
                            className="w-full max-w-sm h-80 object-contain transition-transform duration-500 hover:scale-110"
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
                        />
                    </div>
                </div>

<<<<<<< HEAD

                {/* Product Details Section */}
=======
                {/* Right - Details */}
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
                        {product.title}
                    </h1>

<<<<<<< HEAD
                    {/* Star Rating */}
=======
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
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

<<<<<<< HEAD
                    {/* Product Description */}
=======
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
                    <p className="text-gray-600 leading-relaxed text-base">
                        {product.description}
                    </p>

<<<<<<< HEAD
                    {/* Price Details */}
=======
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
                    <div className="flex items-center space-x-4">
                        <span className="text-3xl font-bold text-gray-900">${product.OurPrice}</span>
                        <span className="text-xl text-gray-400 line-through">${product.MarketPrice}</span>
                    </div>

<<<<<<< HEAD
                    {/* Product Additional Details */}
=======
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
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
<<<<<<< HEAD

                    {/* Action Buttons */}
=======
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                        <button
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl shadow-sm transition-all transform hover:scale-105 active:scale-95"
                            onClick={handleClick}
                        >
                            Add to Cart
                        </button>
<<<<<<< HEAD

                        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95">
=======
                        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95"
                        >
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
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
