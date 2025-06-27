'use client';
import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 pt-20">
            {/* — Footer Info Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-23 grid grid-cols-1 md:grid-cols-4 gap-1 lg:grid-cols-4 gap-12 text-gray-700 text-[15px]">
                {/* Brand Info */}
                <div className="space-y-3">
                    <h1 className="text-2xl font-bold text-gray-900">
                        <span className="text-orange-600">Q</span>uickCart
                    </h1>
                    <p >
                        QuickCart offers top-tier gaming accessories and gear. Performance meets style for every player.
                    </p>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-orange-600">Home</a></li>
                        <li><a href="#" className="hover:text-orange-600">About us</a></li>
                        <li><a href="#" className="hover:text-orange-600">Careers</a></li>
                        <li><a href="#" className="hover:text-orange-600">Privacy policy</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Support</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-orange-600">Help Center</a></li>
                        <li><a href="#" className="hover:text-orange-600">Returns</a></li>
                        <li><a href="#" className="hover:text-orange-600">Shipping</a></li>
                        <li><a href="#" className="hover:text-orange-600">FAQs</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Get in touch</h3>
                    <p className="mb-1">Phone: +92-3429-6987-72</p>
                    <p>Email: contact@quickcart.dev</p>
                    <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                </div>
            </div>

            {/* — Bottom Footer */}
            <div className="mt-16 border-t border-gray-200 py-6 text-center text-gray-500 text-[14px] sm:text-[15px]">
                © 2025 QuickCart. All Rights Reserved.
            </div>
        </footer>
    );
}
