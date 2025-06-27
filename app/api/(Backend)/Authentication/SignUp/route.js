import connectDB from "@/Lib/DB/Db";
import User from "@/Lib/Models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        await connectDB();

        const { name, email, password } = await req.json();

        const emailExist = await User.findOne({ email });
        if (emailExist) {
            return NextResponse.json({ status: 409, message: "Email is Already Used", success: false });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const createdUser = await User.create({ name, email, password: hashedPassword });

        return NextResponse.json({ status: 201, message: "User created successfully", success: true, createdUser });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, message: "Server Error", success: false, error: error.message });
    }
}
