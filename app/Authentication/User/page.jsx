"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function AuthPage() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [SigUp, setSignUp] = useState({
        username: "",
        userEmail: "",
        userPassword: ""
    })
    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value
        console.log(name, value)
    }
    const handleSubmit = () => {

    }
    return (
        <main className="min-h-screen bg-white flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-6 sm:p-8"
            >
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-orange-600">
                    {isSignUp ? "Create Account" : "Welcome Back"}
                </h2>

                <form className="space-y-4" autoComplete="off" onSubmit={handleSubmit}>

                    {isSignUp && (
                        <input
                            type="text"
                            onChange={handleChanges}
                            name="username"
                            autoComplete="off"
                            placeholder="Full Name"
                            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    )}

                    <input
                        type="email"
                        onChange={handleChanges}
                        name="userEmail"
                        autoComplete="off"
                        placeholder="Email"
                        className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    {/* Password Field with Eye Toggle */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="userPassword"
                            onChange={handleChanges}
                            autoComplete="new-password"
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-md p-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-600 cursor-pointer"
                        >
                            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                        </button>
                    </div>

                    {!isSignUp && (
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="text-sm text-orange-600 hover:underline cursor-pointer"
                            >
                                Forgot Password?
                            </button>
                        </div>
                    )}

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md font-semibold text-sm transition cursor-pointer"
                    >
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </motion.button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                    <button
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-orange-600 font-semibold hover:underline cursor-pointer"
                    >
                        {isSignUp ? "Sign In" : "Sign Up"}
                    </button>
                </p>
            </motion.div>
        </main>
    );
}
