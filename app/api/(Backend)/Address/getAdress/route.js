import connectDB from "@/Lib/DB/Db";
import Adress from "@/Lib/Models/Adress";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(req) {
    await connectDB();
    try {
        const { userId } = auth();
        const addresses = await Adress.find({ userId });
        return NextResponse.json({ status: 200, message: "Address Found", addresses });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, message: "Server issue, try again later" });
    }
}
