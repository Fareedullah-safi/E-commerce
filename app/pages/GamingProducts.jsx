'use client'

import { useState } from 'react'

export default function GamingLanding() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="min-h-screen bg-gradient-to-br  py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 transform hover:scale-[1.01] transition-transform duration-300">
                    <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 bg-gradient-to-r from-slate-50 to-blue-50">
                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-12">
                            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                                Level Up Your
                                <br />
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Gaming Experience
                                </span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0">
                                From immersive sound to precise controls—<br />
                                everything you need to win
                            </p>
                            <button
                                className="bg-gradient-to-r cursor-pointer from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Buy now →
                            </button>
                        </div>

                        {/* Right Content - Gaming Image */}
                        {/* Right Content - Gaming Video */}
                        <div className="flex-1 relative">
                            <video
                                controls={isHovered}
                                src="\images\Gaming.mp4"
                                width={500}
                                height={500}
                                className="rounded-2xl shadow-xl"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>

                    </div>
                    {/* — Subscription Section */}
                    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 text-center shadow-sm mb-20">
                        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent mb-4">
                            Subscribe & Get 20% Off
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join our newsletter and stay updated on exclusive offers, new arrivals, and gaming tips.
                        </p>

                        <form className="max-w-3xl mx-auto w-full flex flex-col sm:flex-row items-center gap-4 px-4">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button
                                type="submit"
                                className="w-full cursor-pointer sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-lg rounded-xl hover:from-orange-600 hover:to-red-600 transition-all"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
