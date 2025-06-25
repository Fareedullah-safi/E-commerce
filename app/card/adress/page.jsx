"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import addressIllustration from "@/public/images/address.svg";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";

// Zod Schema
const AddressSchema = z.object({
    userName: z.string().min(3, "Full name is required"),
    PhoneNumber: z.string().regex(/^\d{10,15}$/, "Phone number must be 10-15 digits"),
    PinCode: z.string().regex(/^\d{4,8}$/, "Pin code must be 4-8 digits"),
    StreetAdress: z.string().min(5, "Street Address is required"),
    CityAdress: z.string().min(2, "City is required"),
    StateAdress: z.string().min(2, "State is required"),
});

export default function AddAddressForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(AddressSchema),
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        console.log(data);
        try {
            setLoading(true);
            const res = await axios.post("/api/Address", data);
            if (res.data.status === 201) {
                alert("Address added successfully!");
                reset();
            }
        } catch (error) {
            console.log(error);
            alert("Failed to add address");
        } finally {
            setLoading(false);
        }
    };

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

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input
                            type="text"
                            {...register("userName")}
                            placeholder="Full name"
                            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        {errors.userName && (
                            <p className="text-red-500 text-xs mt-1">{errors.userName.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            {...register("PhoneNumber")}
                            inputMode="numeric"
                            pattern="\d*"
                            placeholder="Phone number"
                            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        {errors.PhoneNumber && (
                            <p className="text-red-500 text-xs mt-1">{errors.PhoneNumber.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            {...register("PinCode")}
                            inputMode="numeric"
                            pattern="\d*"
                            placeholder="Pin code"
                            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        {errors.PinCode && (
                            <p className="text-red-500 text-xs mt-1">{errors.PinCode.message}</p>
                        )}
                    </div>

                    <div>
                        <textarea
                            {...register("StreetAdress")}
                            placeholder="Address (Area and Street)"
                            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        {errors.StreetAdress && (
                            <p className="text-red-500 text-xs mt-1">{errors.StreetAdress.message}</p>
                        )}
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                {...register("CityAdress")}
                                placeholder="City/District/Town"
                                className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            {errors.CityAdress && (
                                <p className="text-red-500 text-xs mt-1">{errors.CityAdress.message}</p>
                            )}
                        </div>

                        <div className="flex-1">
                            <input
                                type="text"
                                {...register("StateAdress")}
                                placeholder="State"
                                className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            {errors.StateAdress && (
                                <p className="text-red-500 text-xs mt-1">{errors.StateAdress.message}</p>
                            )}
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={loading}
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md font-semibold text-sm transition disabled:opacity-50"
                    >
                        {loading ? "Saving..." : "Save Address"}
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
