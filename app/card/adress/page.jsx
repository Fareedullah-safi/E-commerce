"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import addressIllustration from "@/public/images/address.svg";

export default function AddAddressForm() {
    return (
        <main className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center p-6 gap-10">
            {/* Form Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/2 max-w-lg"
            >
                <h1 className="text-3xl font-semibold text-gray-700 mb-8">
                    Add Shipping <span className="text-orange-600 font-bold">Address</span>
                </h1>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full name"
                        className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                        type="text"
                        placeholder="Pin code"
                        className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <textarea
                        placeholder="Address (Area and Street)"
                        className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="City/District/Town"
                            className="flex-1 border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            type="text"
                            placeholder="State"
                            className="flex-1 border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md font-semibold text-sm transition"
                    >
                        Save Address
                    </motion.button>
                </form>
            </motion.div>

            {/* Illustration Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-full md:w-1/2 flex justify-center"
            >
                <Image
                    src={addressIllustration}
                    alt="Address Illustration"
                    className="w-3/4 max-w-md"
                />
            </motion.div>
        </main>
    );
}
