import connectDB from "@/DB/Db";
import Adress from "@/Models/Adress";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();  // ✅ Await the JSON parsing
        const address = await Adress.create(body);
        return NextResponse.json({ status: 201, message: "Adress added successfully", address });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 501, message: "Server issues try again later" });
    }
}
