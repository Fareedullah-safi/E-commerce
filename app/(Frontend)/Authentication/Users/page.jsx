"use client";
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { AuthContext } from "@/app/(Frontend)/pages/context/AuthContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const SignUpSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

const SignInSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function AuthForm() {
    const [isSignUp, setIsSignUp] = useState(false);
    const { setUser } = useContext(AuthContext);
    const route = useRouter()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(isSignUp ? SignUpSchema : SignInSchema),
    });

    const onSubmit = async (data) => {
        try {
            if (isSignUp) {
                const res = await axios.post("/api/Authentication/SignUp", data);
                localStorage.setItem("user", JSON.stringify(res.data.createdUser));
                const status = await res.data.status;
                const username = await res.data.createdUser
                console.log(username)
                if (status === 201) {
                    toast.success("Account Created");
                    route.push("/")
                    Cookies.set("username", username.name, { expires: 7 }); // expires in 7 days
                    setUser(res.data.createdUser)
                    // localStorage.setItem('name', username.name)
                } else if (status === 409) {
                    toast.error("Email already exists");
                } else if (status === 501) {
                    toast.error("Server issue, please try again later");
                } else {
                    toast.error("Something went wrong");
                }
            } else {
                const res = await axios.post("/api/Authentication/SignIn", data);
                const status = await res.data.status;
                const username = await res.data
                console.log(username)
                if (status === 201) {
                    toast.success("Login Successful");
                    route.push("/")
                    Cookies.set("username", username.username, { expires: 7 }); // expires in 7 days
                    setUser(res.data)
                    // localStorage.setItem('name', username.username)
                } else if (status === 401) {
                    toast.error("Invalid email or password");
                } else if (status === 501) {
                    toast.error("Server issue, please try again later");
                } else {
                    toast.error("Something went wrong");
                }
            }
            reset();
        } catch (error) {
            console.error(error);
            toast.error("Network error, please try again");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6"
            >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold text-center text-orange-600"
                >
                    {isSignUp ? "Create an Account" : "Welcome Back"}
                </motion.h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {isSignUp && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <label className="block mb-1 text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                {...register("name")}
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-orange-500"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name.message}
                                </p>
                            )}
                        </motion.div>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                    >
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-orange-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password")}
                            placeholder="********"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-orange-500"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </motion.div>

                    {!isSignUp && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            className="text-right"
                        >
                            <button
                                type="button"
                                className="text-sm text-orange-600 hover:underline focus:outline-none transition cursor-pointer"
                            >
                                Forgot Password?
                            </button>
                        </motion.div>
                    )}

                    <motion.button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition cursor-pointer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </motion.button>
                </form>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="text-center"
                >
                    <p className="text-sm">
                        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                        <button
                            type="button"
                            className="text-orange-600 font-medium hover:underline focus:outline-none transition cursor-pointer"
                            onClick={() => setIsSignUp(!isSignUp)}
                        >
                            {isSignUp ? "Sign In" : "Sign Up"}
                        </button>
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
