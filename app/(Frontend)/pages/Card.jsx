'use client';
import React, { useState } from 'react';
import { GoHeartFill } from "react-icons/go";
import { GiShoppingBag } from "react-icons/gi";
import Link from 'next/link';
import products from "@/Lib/Json/Card.json";
import { FaArrowRight } from 'react-icons/fa';
import MiniWhiteSpinner from '@/Lib/Components/MiniWhiteSpinner';
import toast, { Toaster } from 'react-hot-toast';

const ProductShowcase = () => {
    const [favorites, setFavorites] = useState({});
    const [loading, setLoading] = useState(false);

    const handleClick = () => setLoading(true);

    const toggleFavorite = (id) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [id]: !prevFavorites[id]
        }));
    };

    const buyme = () => {
        toast.success("Wait redirecting to Product page");
    };

    return (
        <main>
            <Toaster position="top-right" reverseOrder={false} />

            <h1 className="text-2xl md:text-3xl font-semibold pt-10 pb-4 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
                Popular Products
            </h1>

            <div className='grid gap-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                {products.slice(0, 9).map((product) => (
                    <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 group">
                        <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 p-4">
                            <button
                                onClick={() => toggleFavorite(product.id)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                            >
                                <GoHeartFill
                                    className={`text-lg transition-colors duration-200 ${favorites[product.id]
                                        ? 'text-rose-500'
                                        : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                />
                            </button>

                            <div className='relative w-full aspect-[4/3] rounded-xl overflow-hidden'>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105'
                                />
                            </div>
                        </div>

                        <div className="p-6">
                            <h2 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">
                                {product.name}
                            </h2>
                            <p className="text-gray-700 text-sm">
                                {product.description.length > 34 ? product.description.slice(0, 34) + "..." : product.description}
                            </p>

                            <div className='flex items-center gap-2 mb-3'>
                                <span className="text-sm font-medium text-slate-700">{product.rating}</span>
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-sm">
                                            {i < product.rating ? '★' : '☆'}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className='text-xl font-bold text-slate-900'>{product.price}</p>
                                <Link href="/shop">
                                    <button
                                        onClick={buyme}
                                        className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium rounded-lg transition-colors duration-200 hover:shadow-lg"
                                    >
                                        Buy Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="py-12 flex justify-center">
                <Link href="/shop">
                    <button
                        className="px-6 py-3 text-lg flex items-center gap-2 rounded-lg cursor-pointer bg-green-500 hover:bg-green-700 text-white"
                        onClick={handleClick}
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <GiShoppingBag /> Explore More Products <MiniWhiteSpinner />
                            </>
                        ) : (
                            <>
                                <GiShoppingBag /> Explore More Products <FaArrowRight />
                            </>
                        )}
                    </button>
                </Link>
            </div>
        </main>
    );
};

export default ProductShowcase;
