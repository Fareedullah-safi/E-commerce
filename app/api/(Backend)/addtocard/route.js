import AddToCard from "@/Lib/Models/AddToCard";
import connectDB from "@/Lib/DB/Db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();
        const { _id } = body;

        const existingProduct = await AddToCard.findById(_id);

        if (existingProduct) {
            return NextResponse.json({ status: 409, message: "Product already exists in your Cart" });
        }
        else {
            const newProduct = await AddToCard.create(body);

            return NextResponse.json({ status: 201, message: "Product added to Cart successfully", newProduct });
        }

    } catch (error) {
        console.error("Error in AddToCart API:", error);
        return NextResponse.json({ status: 500, message: "Internal Server Error", error: error.message });
    }
}
