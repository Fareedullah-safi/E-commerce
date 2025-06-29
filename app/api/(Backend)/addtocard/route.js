import AddToCard from "@/Lib/Models/AddToCard";
import connectDB from "@/Lib/DB/Db";
import { NextResponse } from "next/server";
<<<<<<< HEAD
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT;
=======
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef

export async function POST(req) {
    try {
        await connectDB();

<<<<<<< HEAD
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
=======
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
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
    }
}
