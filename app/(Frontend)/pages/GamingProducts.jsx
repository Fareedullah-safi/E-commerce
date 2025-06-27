'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function GamingLanding() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-12 px-4 text-gray-800">
            <div className="max-w-7xl mx-auto">

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-3xl overflow-hidden mb-12 shadow-xl border border-gray-100"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16">

                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left mb-10 lg:mb-0 lg:pr-12">
                            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
                                Level Up Your
                                <br />
                                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    Gaming Experience
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                                Immerse yourself with pro-level sound, lightning-fast response, and unbeatable controls.
                            </p>
                            <Link href="/shop">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transition-all"
                                >
                                    Buy Now →
                                </motion.button>
                            </Link>
                        </div>

                        {/* Right Content - Gaming Video */}
                        <div className="flex-1 relative">
                            <motion.video
                                initial={{ scale: 0.95 }}
                                animate={{ scale: isHovered ? 1.02 : 1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                controls={isHovered}
                                src="/images/Gaming.mp4"
                                width={500}
                                height={500}
                                className="rounded-2xl shadow-lg border border-gray-200"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Subscription Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full py-16 px-4 sm:px-6 lg:px-8 text-center bg-white rounded-3xl shadow-xl border border-gray-100"
                >
                    <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent mb-6">
                        Subscribe & Get 20% Off
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join our newsletter and be the first to access exclusive offers, product launches, and pro gaming tips.
                    </p>

                    <form className="max-w-3xl mx-auto w-full flex flex-col sm:flex-row items-center gap-4 px-4">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 w-full px-6 py-4 text-lg border border-gray-300 bg-white text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold text-lg rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all shadow-md hover:shadow-xl"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}
