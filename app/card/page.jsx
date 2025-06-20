'use client'
import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import Link from 'next/link';

const CartPage = () => {
    const [quantity, setQuantity] = useState(3);

    const price = 299.99;
    const subtotal = (quantity * price).toFixed(2);
    const tax = (subtotal * 0.02).toFixed(2);
    const total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);

    return (
        <main className="bg-gray-50 min-h-screen py-10 px-4 md:px-12 lg:px-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10"
            >
                {/* Left Section - Cart Items */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-between items-center border-b pb-4 mb-6"
                    >
                        <h1 className="text-3xl font-bold text-gray-800">
                            Your <span className="text-orange-500">Cart</span>
                        </h1>
                        <span className="text-gray-500 text-lg">3 Items</span>
                    </motion.div>

                    <div className="grid grid-cols-4 gap-4 font-semibold text-gray-600 text-sm border-b pb-3">
                        <span>Product Details</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Subtotal</span>
                    </div>

                    {/* Product Row */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="grid grid-cols-4 gap-4 items-center py-5 border-b transition duration-300"
                    >
                        <div className="flex items-center gap-4">
                            <motion.img
                                src="/images/console.png"
                                alt="Sony WF-1000XM5"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="w-16 h-16 object-contain bg-gray-100 rounded-lg shadow"
                            />
                            <div>
                                <p className="text-sm font-medium text-gray-800">Sony WF-1000XM5</p>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    className="text-xs text-orange-500 hover:text-orange-600 hover:underline mt-1 transition duration-150"
                                >
                                    Remove
                                </motion.button>
                            </div>
                        </div>

                        <span className="text-gray-800 font-medium">${price}</span>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="px-2 text-gray-500 hover:text-orange-500 transition duration-150"
                            >
                                <FiChevronLeft />
                            </button>
                            <input
                                type="text"
                                value={quantity}
                                readOnly
                                className="w-10 text-center border border-gray-300 rounded-md py-1 focus:outline-none"
                            />
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="px-2 text-gray-500 hover:text-orange-500 transition duration-150"
                            >
                                <FiChevronRight />
                            </button>
                        </div>

                        <span className="text-gray-800 font-semibold">${subtotal}</span>
                    </motion.div>

                    {/* Continue Shopping */}
                    <motion.div
                        whileHover={{ x: -3 }}
                        className="mt-6"
                    >
                        <button className="flex items-center gap-1 text-orange-500 hover:text-orange-600 hover:gap-2 transition-all duration-300 ease-in-out text-sm font-medium">
                            <FaArrowLeft />
                            <span>Continue Shopping</span>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Section - Order Summary */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

                    <div className="mb-5">
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Select Address
                        </label>
                        <select className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400">
                            <option>Select Address</option>
                            <option>Home</option>
                            <option>Office</option>
                        </select>
                        <Link
                            href="/shop"
                            className="mt-2 inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-600 hover:gap-3 transition-all duration-300"
                        >
                            <FaPlus className="text-xs" />
                            Add New Address
                        </Link>
                    </div>

                    <div className="mb-5">
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Promo Code
                        </label>
                        <input
                            type="text"
                            placeholder="Enter promo code"
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            className="mt-3 bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-md font-medium text-sm transition duration-200"
                        >
                            Apply
                        </motion.button>
                    </div>

                    <div className="text-sm text-gray-700 space-y-2 border-t pt-4">
                        <div className="flex justify-between">
                            <span>Price</span>
                            <span>${subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping Fee</span>
                            <span className="text-green-600 font-medium">Free</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax (2%)</span>
                            <span>${tax}</span>
                        </div>
                    </div>

                    <div className="flex justify-between text-lg font-bold mt-4">
                        <span>Total</span>
                        <span>${total}</span>
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.97 }}
                        className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md text-center font-semibold text-sm transition duration-200"
                    >
                        Place Order
                    </motion.button>
                </motion.div>
            </motion.div>
        </main>
    );
};

export default CartPage;
