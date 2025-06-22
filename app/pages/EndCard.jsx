'use client'

import MiniWhiteSpinner from '@/Components/MiniWhiteSpinner';
import Link from 'next/link';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaCartArrowDown } from "react-icons/fa";
import { SiProducthunt } from "react-icons/si";

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            title: "Unparalleled Sound",
            description: "Experience crystal-clear audio with premium headphones.",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            alt: "Premium headphones on colorful background"
        },
        {
            id: 2,
            title: "Stay Connected",
            description: "Compact and stylish earphones for every occasion.",
            image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            alt: "Woman with curly hair wearing earphones"
        },
        {
            id: 3,
            title: "Power in Every Pixel",
            description: "Shop the latest laptops for work, gaming, and more.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            alt: "Professional man working on laptop"
        }
    ];

    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        toast.success("Loading all products...");
    };

    const buyme = () => {
        toast.success("Wait redirecting to Product page");
    }

    return (
        <main>
            {/* 🟡 Toast container must be added once */}
            <Toaster position="top-right" reverseOrder={false} />

            <h1 className="text-2xl md:text-3xl font-semibold pt-10 pb-4 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
                Popular products
            </h1>

            <div className='grid w-full gap-8 px-4 grid-cols-1 sm:grid-cols-2 justify-center items-center md:grid-cols-2 lg:grid-cols-3 md:px-8 lg:px-16 xl:px-23 2xl:px-30'>
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 group w-full sm:max-w-none"
                    >
                        {/* Image */}
                        <div className="relative h-64 sm:h-72 md:h-80 lg:h-80 xl:h-96 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 sm:group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent sm:from-black/60 sm:via-black/20"></div>

                            {/* Overlay Text */}
                            <div className="absolute inset-0 p-4 sm:p-6 md:p-6 lg:p-8 flex flex-col justify-end text-white">
                                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 leading-tight">
                                    {product.title}
                                </h3>
                                <p className="text-gray-200 mb-4 sm:mb-6 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed line-clamp-2 sm:line-clamp-none">
                                    {product.description}
                                </p>

                                {/* Buy Now Button */}
                                <Link href="/shop">
                                    <button
                                        className="cursor-pointer bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md sm:rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-1 sm:gap-2 self-start group-hover:shadow-lg"
                                        onClick={buyme}
                                    >
                                        Buy now <FaCartArrowDown />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Border on Hover */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-none"></div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 flex justify-center">
                <Link href="/shop">
                    <button
                        onClick={handleClick}
                        disabled={loading}
                        className="cursor-pointer flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 active:bg-black text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-md sm:rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl touch-manipulation disabled:opacity-70"
                    >
                        {loading ? (
                            <>
                                <p>View All Products</p>
                                <MiniWhiteSpinner size="20" color="white" />
                            </>
                        ) : (
                            <>
                                View All Products <SiProducthunt />
                            </>
                        )}
                    </button>
                </Link>
            </div>
        </main>
    );
};

export default FeaturedProducts;
