'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import {
    AiOutlinePlus,
    AiOutlineUnorderedList,
    AiOutlineShoppingCart,
} from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';

const SideBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen p-2">
            {/* Sidebar */}
            <aside
                className={`fixed z-30 top-0 left-0 h-full w-50 bg-white lg:w-64  transform transition-transform duration-300 md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full '
                    }`}
            >
                <nav className="mt-16 md:mt-0">
                    <ul className="space-y-3 p-4">
                        <h1 className="font-semibold text-2xl">
                            Admin Panel
                        </h1>
                        <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                            <AiOutlineUnorderedList className="text-xl" />
                            <Link href="/AdminProducts/AddProduct">Add Products</Link>
                        </li>
                        <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                            <AiOutlinePlus className="text-xl" />
                            <Link href="/AdminProducts/All-Products">All Products</Link>
                        </li>
                        <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                            <AiOutlineShoppingCart className="text-xl" />
                            <Link href="/Orders">Orders</Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black opacity-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div>
                {/* Mobile Header with Menu */}
                <div className="md:hidden flex justify-end items-center mb-4">
                    <button
                        className="text-2xl"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <FiMenu />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
