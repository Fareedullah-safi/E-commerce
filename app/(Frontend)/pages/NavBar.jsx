"use client";
import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
import React, { useState, useContext, useEffect } from "react";
=======
import React, { useState, useContext } from "react";
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import toast from "react-hot-toast";
import MiniWhiteSpinner from '@/Lib/Components/MiniWhiteSpinner';
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/(Frontend)/pages/context/AuthContext";
<<<<<<< HEAD
import Cookies from "js-cookie";
=======
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
import axios from "axios";

const NavBar = () => {
    const { user, setUser } = useContext(AuthContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
<<<<<<< HEAD
=======

>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
    const navData = [
        { name: "Home", link: "/" },
        { name: "Shop", link: "/shop" },
        { name: "About Us", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];
<<<<<<< HEAD
    const handleLogout = async () => {
        setLoading(true);
        const res = await axios.post("/api/Authentication/Signout");
        const status = res.data.status;
        if (status === 200) {
            // localStorage.removeItem("username")
            // Cookies.remove("username");
            setUser(null);
            toast.success("Logged out successfully");
=======

    const handleLogout = async () => {
        setLoading(true)
        const res = await axios.post("/api/Authentication/Signout")
        const status = res.data.status
        if (status === 200) {
            localStorage.removeItem("user");
            setUser(null);
            setTimeout(() => {
                toast.success("Logged out successfully");
            }, 1);
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
            setLoading(false);
            router.push("/");
        }
    };
<<<<<<< HEAD
=======

>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
    return (
        <header className="w-full shadow-md bg-gray-100 z-50 sticky top-0">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:px-8 lg:px-16 xl:px-23 2xl:px-0">

                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/images/Logo.svg"
                        alt="Logo"
                        width={129}
                        height={34}
                        className="w-[129px] h-[34px] xl:w-[160px] xl:h-[40px]"
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-3">
                    <ul className="flex gap-6">
                        {navData.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link} className="text-gray-800 hover:text-orange-600 transition">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link href="/AdminProducts/AddProduct">
                        <button className="text-sm border px-3 py-1.5 rounded-full hover:border-orange-600 hover:text-orange-600 transition">
                            Seller Dashboard
                        </button>
                    </Link>
                </div>

                {/* Account + Hamburger */}
                <div className="flex items-center gap-4 md:gap-6">

                    {/* Cart Icon */}
                    <div className="relative">
<<<<<<< HEAD
                        <Link href="/cart">
=======
                        <Link href="/product/cart">
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
                            <HiShoppingCart className="text-2xl" />
                            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                3
                            </span>
                        </Link>
                    </div>

                    {/* Account Button */}
                    {user ? (
                        <div className="flex items-center gap-2 text-gray-800">
                            <FaUserCircle className="text-xl text-orange-500" />
<<<<<<< HEAD
                            <span className="text-sm font-medium">
                                Hi, {user}
=======
                            <span className="hidden sm:block text-sm font-medium">
                                Hi, {user.name || user.username}
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
                            </span>
                            <button
                                onClick={handleLogout}
                                className="text-sm border px-3 py-1.5 rounded-full hover:border-orange-600 hover:text-orange-600 transition flex items-center gap-2"
                                disabled={loading}
                            >
                                {loading ? <MiniWhiteSpinner /> : "Logout"}
                            </button>
                        </div>
                    ) : (
                        <Link href="/Authentication/Users">
                            <button className="text-2xl flex items-center gap-1 text-gray-800 hover:text-orange-600 transition">
                                <FaUserCircle />
                                <span className="hidden sm:block text-sm">Account</span>
                            </button>
                        </Link>
                    )}

                    {/* Hamburger Button */}
                    <button
                        className="lg:hidden text-2xl text-gray-800"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white shadow-inner px-6 py-4">
                    <ul className="flex flex-col gap-4">
                        {navData.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.link}
                                    className="block text-gray-800 hover:text-orange-600 transition"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <Link href="/AdminProducts/AddProduct">
                            <button className="w-full text-left text-sm border px-4 py-2 rounded-full hover:border-orange-600 hover:text-orange-600 transition">
                                Seller Dashboard
                            </button>
                        </Link>
<<<<<<< HEAD
=======
                        {user && (
                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    handleLogout();
                                }}
                                className="w-full text-left text-sm border px-4 py-2 rounded-full hover:border-orange-600 hover:text-orange-600 transition flex items-center gap-2"
                                disabled={loading}
                            >
                                {loading ? <MiniWhiteSpinner /> : "Logout"}
                            </button>
                        )}
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
                    </ul>
                </div>
            )}
        </header>
    );
};

export default NavBar;
