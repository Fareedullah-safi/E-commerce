import connectDB from "@/DB/Db";
import Adress from "@/Models/Adress";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectDB()
        const body = await req.json()
        const FindAdress = await Adress.find(body)
        return NextResponse.json({ status: 201, message: "Adress Found", FindAdress })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ status: 501, message: "server issue try again later" })
    }
}