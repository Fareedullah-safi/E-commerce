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
            )
        );
    };

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
        </main>
    );
};

export default CartPage;
