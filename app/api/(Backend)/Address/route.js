import connectDB from "@/Lib/DB/Db";
import Adress from "@/Lib/Models/Adress";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

export async function POST(req) {
    const SECRET = process.env.JWT
    try {
        const token = cookies().get("token")?.value
        if (!token) {
            return NextResponse({ status: 401, message: "Token not found" })
        }
        const Decoded = jwt.verify(token, SECRET)
        const userId = Decoded.id;
        await connectDB();
        const body = await req.json();
        const Address = await Adress.create({
            ...body,
            userId
        })
        return NextResponse.json({ status: 201, success: true, message: "Address added", Address, userId })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, message: "Server error, try again later" });
    }
}
