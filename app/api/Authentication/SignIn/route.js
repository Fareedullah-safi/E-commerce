import User from "@/Models/User";
import connectDB from "@/DB/Db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req) {
    await connectDB();
    try {
        const { email, password } = await req.json();

        // Find user by email
        const existUser = await User.findOne({ email });
        if (!existUser) {
            return NextResponse.json({ status: 401, message: "Invalid email or password" });
        }

        // Compare entered password with hashed password in DB
        const isPasswordCorrect = await bcrypt.compare(password, existUser.password);
        if (!isPasswordCorrect) {
            return NextResponse.json({ status: 401, message: "Invalid email or password" });
        }

        // Generate token with userId
        const token = jwt.sign({ userId: existUser._id }, process.env.JWT, { expiresIn: "7d" });
        const username = existUser.name
        return NextResponse.json({ status: 201, message: "Login Successful", token, username });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 501, message: "Server issue, try again later" });
    }
}
