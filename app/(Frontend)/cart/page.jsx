<<<<<<< HEAD
"use client";

import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

const CartPage = () => {
    const [products, setProducts] = useState([]);
    const [address, setAddress] = useState(null);

    // Fetch Address
    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const res = await axios.get("/api/Address/getAddress");
                const addresses = res.data.Address;
                if (addresses && addresses.length > 0) {
                    setAddress(addresses[0]); // Show first address
                }
            } catch (err) {
                console.error(err);
            }
        };
        fetchAddress();
    }, []);

    // Fetch Cart Data
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await axios.get("/api/addtocarddata");
                const cartItems = res.data.Products || [];
                const itemsWithQuantity = cartItems.map(item => ({
                    ...item,
                    quantity: 1
                }));
                setProducts(itemsWithQuantity);
            } catch (err) {
                console.error(err);
            }
        };

        fetchCart();
    }, []);

    // Increase or Decrease Quantity
    const updateQuantity = (index, change) => {
        setProducts(prev =>
            prev.map((item, i) =>
                i === index
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
=======
'use client';
import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import axios from 'axios';

const CartPage = () => {
    // State to store products in the cart
    const [products, setProducts] = useState([]);

    // Get the current logged-in user (⚠️ This is incorrect usage; see note below)

    // Fetch cart products from API when component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/api/addtocarddata"); // Fetch cart data
                const data = res.data.Products;
                // Add quantity property to each product
                const productsWithQuantity = data.map(product => ({
                    ...product,
                    quantity: 1
                }));
                setProducts(productsWithQuantity);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    // Fetch user's saved addresses when component mounts
    useEffect(() => {
        const FetchAdress = async () => {
            try {
                const res = await axios.get("/api/Address/getAdress");
                console.log(res); // Log address response
            } catch (error) {
                console.log(error);
            }
        };
        FetchAdress();
    }, []);

    // Handle increasing or decreasing product quantity
    const handleQuantityChange = (index, amount) => {
        setProducts(prevProducts =>
            prevProducts.map((product, i) =>
                i === index
                    ? { ...product, quantity: Math.max(1, product.quantity + amount) } // Prevent quantity going below 1
                    : product
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
            )
        );
    };

<<<<<<< HEAD
    // Remove Product from Cart
    const removeProduct = async (productId) => {
        try {
            await axios.delete(`/api/addtocarddata/removecard/${productId}`);
            setProducts(prev => prev.filter(item => item._id !== productId));
            toast.success("Product removed");
        } catch (err) {
            console.error(err);
            toast.error("Failed to remove product");
        }
    };

    // Place Order
    const placeOrder = () => {
        if (!address) {
            toast.error("Select an address first");
            return;
        }
        if (products.length > 0) {
            toast.error("Your cart Empty")
            return;
        }
        toast.success("Order placed successfully!");
    };

    // Price Calculation
    const subtotal = products.reduce(
        (total, item) => total + item.OurPrice * item.quantity,
        0
    );
    const tax = subtotal * 0.02;
    const total = subtotal + tax;



    return (
        <main className="bg-gray-50 min-h-screen py-6 px-4 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

                {/* Cart Section */}
                <div className="flex-1 bg-white p-4 sm:p-6 rounded-xl shadow">
                    <div className="flex justify-between items-center border-b pb-4 mb-6">
                        <h1 className="text-2xl font-bold">Your <span className="text-orange-500">Cart</span></h1>
                        <span>{products.length} Items</span>
                    </div>

                    {products.length === 0 ? (
                        <p className="text-center text-gray-500 py-10">Your cart is empty.</p>
                    ) : (
                            <div>
                                <div className="hidden sm:grid grid-cols-4 gap-4 text-sm font-semibold text-gray-600 border-b pb-3">
                                <span>Product</span>
                                <span>Price</span>
                                <span>Quantity</span>
                                <span>Subtotal</span>
                            </div>

                                {products.map((item, index) => (
                                    <div key={item._id} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center py-4 border-b">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={item.imageUrl || "/placeholder.jpg"}
                                                alt={item.title}
                                                className="w-16 h-16 object-contain bg-gray-100 rounded-lg"
                                            />
                                            <div>
                                                <p className="font-medium">{item.title}</p>
                                                <button
                                                    onClick={() => removeProduct(item._id)}
                                                    className="text-orange-500 text-xs hover:underline"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>

                                        <span>${item.OurPrice.toFixed(2)}</span>

                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => updateQuantity(index, -1)}
                                                disabled={item.quantity === 1}
                                                className="px-2 text-gray-500 hover:text-orange-500"
                                            >
                                                <FiChevronLeft />
                                            </button>
                                            <input
                                                type="text"
                                                value={item.quantity}
                                                readOnly
                                                className="w-10 text-center border rounded"
                                            />
                                            <button
                                                onClick={() => updateQuantity(index, 1)}
                                                className="px-2 text-gray-500 hover:text-orange-500"
                                            >
                                                <FiChevronRight />
                                            </button>
                                        </div>

                                        <span className="font-semibold">
                                            ${(item.OurPrice * item.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                    )}

                    <div className="mt-6">
                        <Link href="/shop" className="text-orange-500 hover:underline flex items-center gap-2 text-sm">
                            <FaArrowLeft /> Continue Shopping
                        </Link>
                    </div>
                </div>

                {/* Summary Section */}
                <div className="w-full lg:w-1/3 bg-white p-4 sm:p-6 rounded-xl shadow">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                    <div className="mb-4">
                        <label className="text-sm font-semibold">Delivery Address</label>
                        {address ? (
                            <div className="bg-gray-100 p-3 rounded mt-2 text-sm space-y-1">
                                <p><strong>Name:</strong> {address.userName}</p>
                                <p><strong>Phone:</strong> {address.PhoneNumber}</p>
                                <p><strong>Street:</strong> {address.StreetAdress}</p>
                                <p><strong>City:</strong> {address.CityAdress}</p>
                                <p><strong>State:</strong> {address.StateAdress}</p>
                                <p><strong>Pin:</strong> {address.PinCode}</p>
                            </div>
                        ) : (
                            <p className="text-gray-500 text-sm mt-2">No address selected.</p>
                        )}

                        <Link href="/cart/Address" className="text-orange-500 hover:underline flex items-center gap-2 mt-2 text-sm">
                            <FaPlus className="text-xs" />
                            {address ? "Change Address" : "Add Address"}
                        </Link>
                    </div>

                    <div className="text-sm space-y-2 border-t pt-4">
                        <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>Shipping</span><span className="text-green-600">Free</span></div>
                        <div className="flex justify-between"><span>Tax (2%)</span><span>${tax.toFixed(2)}</span></div>
                    </div>

                    <div className="flex justify-between font-bold text-lg mt-4">
                        <span>Total</span><span>${total.toFixed(2)}</span>
                    </div>

                    <button
                        onClick={placeOrder}
                        className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded text-sm font-semibold"
                    >
                        Place Order
                    </button>
                </div>
            </div>
=======
    // Calculate subtotal, tax, and total price
    const subtotal = products.reduce((acc, product) => acc + product.OurPrice * product.quantity, 0);
    const tax = subtotal * 0.02;
    const total = subtotal + tax;

    return (
        <main className="bg-gray-50 min-h-screen py-6 px-4 sm:px-6 md:px-12 lg:px-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8"
            >
                {/* ---------------- Left Section - Cart Items ---------------- */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                    {/* Cart Header */}
                    <div className="flex justify-between items-center border-b pb-4 mb-6">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                            Your <span className="text-orange-500">Cart</span>
                        </h1>
                        <span className="text-gray-500 text-base sm:text-lg">{products.length} Items</span>
                    </div>

                    {/* Table Headings for larger screens */}
                    <div className="hidden sm:grid grid-cols-4 gap-4 font-semibold text-gray-600 text-sm border-b pb-3">
                        <span>Product Details</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Subtotal</span>
                    </div>

                    {/* Render each product in cart */}
                    {products.map((product, index) => (
                        <motion.div
                            key={product._id || index}
                            whileHover={{ scale: 1.02 }}
                            className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center py-5 border-b transition duration-300"
                        >
                            {/* Product Details */}
                            <div className="flex items-center gap-4">
                                <motion.img
                                    src={product.imageUrl || "/placeholder.jpg"}
                                    alt={product.title}
                                    initial={{ scale: 0.95 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-16 h-16 object-contain bg-gray-100 rounded-lg shadow"
                                />
                                <div>
                                    <p className="text-sm font-medium text-gray-800">{product.title}</p>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        className="text-xs text-orange-500 hover:text-orange-600 hover:underline mt-1 transition duration-150"
                                    >
                                        Remove
                                    </motion.button>
                                </div>
                            </div>

                            {/* Product Price */}
                            <span className="text-gray-800 font-medium">${product.OurPrice}</span>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleQuantityChange(index, -1)}
                                    className="px-2 text-gray-500 hover:text-orange-500 transition duration-150"
                                >
                                    <FiChevronLeft />
                                </button>
                                <input
                                    type="text"
                                    value={product.quantity}
                                    readOnly
                                    className="w-10 text-center border border-gray-300 rounded-md py-1 focus:outline-none"
                                />
                                <button
                                    onClick={() => handleQuantityChange(index, 1)}
                                    className="px-2 text-gray-500 hover:text-orange-500 transition duration-150"
                                >
                                    <FiChevronRight />
                                </button>
                            </div>

                            {/* Subtotal for this product */}
                            <span className="text-gray-800 font-semibold">
                                ${(product.OurPrice * product.quantity).toFixed(2)}
                            </span>
                        </motion.div>
                    ))}

                    {/* Link to continue shopping */}
                    <div className="mt-6">
                        <Link href="/shop" className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 hover:gap-2 transition-all duration-300 ease-in-out text-sm font-medium">
                            <FaArrowLeft />
                            <span>Continue Shopping</span>
                        </Link>
                    </div>
                </motion.div>

                {/* ---------------- Right Section - Order Summary ---------------- */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/3 bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                    {/* Order Summary Header */}
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

                    {/* Address Section */}
                    <div className="mb-5">
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Select Address
                        </label>
                        <Link
                            href="/product/cart/adress"
                            className="mt-2 inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-600 hover:gap-3 transition-all duration-300"
                        >
                            <FaPlus className="text-xs" />
                            Add New Address
                        </Link>
                    </div>

                    {/* Promo Code Input */}
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

                    {/* Price Summary */}
                    <div className="text-sm text-gray-700 space-y-2 border-t pt-4">
                        <div className="flex justify-between">
                            <span>Price</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping Fee</span>
                            <span className="text-green-600 font-medium">Free</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax (2%)</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Total Price */}
                    <div className="flex justify-between text-lg font-bold mt-4">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>

                    {/* Place Order Button */}
                    <motion.button
                        whileTap={{ scale: 0.97 }}
                        className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md text-center font-semibold text-sm transition duration-200"
                    >
                        Place Order
                    </motion.button>
                </motion.div>
            </motion.div>
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
        </main>
    );
};

export default CartPage;
