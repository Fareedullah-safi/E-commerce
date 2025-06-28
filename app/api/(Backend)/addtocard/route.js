import AddToCard from "@/Lib/Models/AddToCard";
import connectDB from "@/Lib/DB/Db";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT;

export async function POST(req) {
    try {
        await connectDB();

        const { id, title, description, MarketPrice, OurPrice, imageUrl, quantity } = await req.json();
        const token = cookies().get("token")?.value;

        if (!token) return NextResponse.json({ status: 401, message: "Unauthorized" });

        const { id: userId } = jwt.verify(token, SECRET);

        const productExists = await AddToCard.findOne({ userId, id });
        if (productExists) {
            return NextResponse.json({ status: 409, message: "Product already in cart" });
        }

        const newProduct = await AddToCard.create({ id, title, description, MarketPrice, OurPrice, imageUrl, quantity, userId });

        return NextResponse.json({ status: 201, message: "Added to cart", newProduct });

    } catch (error) {
        console.error("AddToCart API Error:", error);
        return NextResponse.json({ status: 500, message: "Server Error", error: error.message });
    }
}
