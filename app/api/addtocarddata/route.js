import AddToCard from "@/Models/AddToCard";
import connectDB from "@/DB/Db";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectDB()
        const Products = await AddToCard.find()
        return NextResponse.json({ status: 201, message: "products found", Products })
    } catch (error) {
        console.error(error)
    }
}