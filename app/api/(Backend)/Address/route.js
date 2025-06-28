import connectDB from "@/Lib/DB/Db";
import Adress from "@/Lib/Models/Address";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
    const SECRET = process.env.JWT;

    try {
        const token = cookies().get("token")?.value;

        if (!token) {
            return NextResponse.json({ status: 401, message: "Token not found" });
        }

        const decoded = jwt.verify(token, SECRET);
        const userId = decoded.id;

        await connectDB();

        const body = await req.json();

        const updatedAddress = await Adress.findOneAndUpdate(
            { userId },
            { ...body },
            { new: true, upsert: true } // upsert = create if not found
        );

        return NextResponse.json({
            status: 201,
            success: true,
            message: "Address saved successfully",
            Address: updatedAddress
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, message: "Server error, try again later" });
    }
}
