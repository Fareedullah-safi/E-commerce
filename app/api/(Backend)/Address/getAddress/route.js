import connectDB from "@/Lib/DB/Db";
import Adress from "@/Lib/Models/Address";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";
export async function GET(req) {
    const SECRET = process.env.JWT
    try {
        await connectDB();
        const token = cookies().get("token")?.value
        if (!token) {
            return NextResponse({ status: 401, message: "token not found" })
        }
        const Decoded = jwt.verify(token, SECRET)
        const userId = Decoded.id
        const Address = await Adress.find({ userId });
        return NextResponse.json({ status: 201, message: "Address Found", Address });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, message: "Server issue, try again later" });
    }
}
