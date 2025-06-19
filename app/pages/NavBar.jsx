'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navData = [
        { name: 'Home', link: '/' },
        { name: 'Shop', link: '/shop' },
        { name: 'About Us', link: '/about' },
        { name: 'Contact', link: '/contact' },
    ];

    return (
        <header className="w-full shadow-md bg-gray-100 z-50 sticky top-0">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:px-8 lg:px-16 xl:px-23 2xl:px-0">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/images/Logo.svg"
                        alt="Logo"
                        className="w-[129px] h-[34px] xl:w-[160px] xl:h-[40px]"
                        width={129}
                        height={34}
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex gap-6">
                        {navData.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.link}
                                    className="text-gray-800 hover:text-orange-600 transition"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="text-sm border px-4 py-1.5 rounded-full cursor-pointer hover:border-orange-600 hover:text-orange-600 transition">
                        <Link href="/AdminProducts/AddProduct">
                            Seller Dashboard
                        </Link>
                    </button>
                </div>

                {/* Account + Hamburger */}
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Account */}
                    <Link
                        href="/account"
                        className="text-2xl flex items-center gap-1 text-gray-800 hover:text-blue-600 transition"
                    >
                        <FaUserCircle />
                        <span className="text-sm hidden sm:block">Account</span>
                    </Link>

                    {/* Hamburger Button (mobile only) */}
                    <button
                        className="md:hidden text-2xl text-gray-800"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-inner px-6 py-4">
                    <ul className="flex flex-col gap-4">
                        {navData.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.link}
                                    className="block text-gray-800 hover:text-blue-600 transition"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <button className="w-full text-left text-sm border px-4 py-2 rounded-full cursor-pointer hover:border-blue-600 hover:text-blue-600 transition">
                            Seller Dashboard
                        </button>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default NavBar;