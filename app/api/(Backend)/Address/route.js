import connectDB from "@/Lib/DB/Db";
import Adress from "@/Lib/Models/Adress";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();
        const Address = await Adress.create(body)
        return NextResponse.json({ status: 201, success: true, message: "Address added", Address })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, message: "Server error, try again later" });
    }
}
