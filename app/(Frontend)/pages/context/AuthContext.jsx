"use client";
<<<<<<< HEAD
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const username = Cookies.get("username")
        setUser(user || username)
    }, [])
=======
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser && storedUser !== "undefined") {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Failed to parse user from localStorage:", error);
                localStorage.removeItem("user");
            }
        }
    }, []);

>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
<<<<<<< HEAD
};
=======
}
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
