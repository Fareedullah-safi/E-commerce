'use client';

import React, { useEffect, useState } from 'react';
import SideBar from '@/Conpunents/SideBar';
import { AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';

const AllProductsPage = () => {
    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('/api/allproducts');
                if (res.data.success) {
                    setProducts(res.data.products);
                }
            } catch (err) {
                console.error("Error loading products:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        setDeletingId(id);
        try {
            const res = await axios.delete(`/api/delete/${id}`);
            if (res.data.success) {
                setProducts(product.filter((p) => p._id !== id));
            }
        } catch (err) {
            console.error("Error deleting product:", err);
        } finally {
            setDeletingId(null);
        }
    };

    const renderSkeletonRow = (_, index) => (
        <tr key={index} className="animate-pulse border-b">
            <td className="p-4"><div className="bg-gray-200 h-14 w-14 rounded-lg" /></td>
            <td className="p-4"><div className="h-4 bg-gray-200 rounded w-24" /></td>
            <td className="p-4 hidden md:table-cell"><div className="h-4 bg-gray-200 rounded w-40" /></td>
            <td className="p-4"><div className="h-4 bg-gray-200 rounded w-12" /></td>
            <td className="p-4"><div className="h-4 bg-gray-200 rounded w-16" /></td>
            <td className="p-4 text-center"><div className="h-8 bg-gray-200 rounded w-20 mx-auto" /></td>
        </tr>
    );

    return (
        <main className="flex bg-gray-100 min-h-screen">
            <SideBar />
            <section className="flex-1 w-full p-4 md:p-8">
                <h1 className="text-2xl md:text-4xl font-bold text-center text-cyan-700 mb-6">
                    All Products
                </h1>

                <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
                    <table className="min-w-full text-sm md:text-base">
                        <thead>
                            <tr className="bg-cyan-50 text-gray-800 uppercase tracking-wider text-xs md:text-sm">
                                <th className="p-4 text-left">Image</th>
                                <th className="p-4 text-left">Title</th>
                                <th className="p-4 text-left hidden lg:table-cell">Description</th>
                                <th className="p-4 text-left">Rating</th>
                                <th className="p-4 text-left">Price</th>
                                <th className="p-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading
                                ? Array.from({ length: 6 }).map(renderSkeletonRow)
                                : product.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="text-center text-gray-500 py-10">
                                            No products found.
                                        </td>
                                    </tr>
                                ) : product.map((product) => (
                                    <tr key={product._id} className="border-b hover:bg-gray-50 transition">
                                        <td className="p-4">
                                            {product.image && product.image.trim() !== "" ? (
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-lg"
                                                />
                                            ) : (
                                                <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-xs">
                                                    No Image
                                                </div>
                                            )}
                                        </td>
                                        <td className="p-4 font-semibold text-gray-800">{product.title}</td>
                                        <td className="p-4 hidden lg:table-cell text-gray-500">
                                            {product.description.length > 50
                                                ? product.description.slice(0, 50) + '...'
                                                : product.description}
                                        </td>
                                        <td className="p-4">{product.rating} / 5</td>
                                        <td className="p-4 text-green-600 font-medium">${product.price}</td>
                                        <td className="p-4 text-center">
                                            <button
                                                onClick={() => handleDelete(product._id)}
                                                disabled={deletingId === product._id}
                                                className={`flex items-center justify-center gap-1 px-3 py-1 rounded-lg transition 
                                                    ${deletingId === product._id
                                                        ? 'bg-red-200 text-red-500 cursor-not-allowed'
                                                        : 'bg-red-100 hover:bg-red-200 text-red-700'
                                                    }`}
                                            >
                                                {deletingId === product._id ? (
                                                    <span className="animate-pulse">Deleting...</span>
                                                ) : (
                                                    <>
                                                        <AiOutlineDelete className="text-lg" />
                                                        <span className="hidden sm:inline">Delete</span>
                                                    </>
                                                )}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default AllProductsPage;
