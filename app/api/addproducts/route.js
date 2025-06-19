import connectDB from "@/DB/Db";
import Product from "@/Models/Product";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();
        const { id } = body;

        // Check if the product with the same _id already exists
        const existingProduct = await Product.findOne({ id });
        if (existingProduct) {
            return NextResponse.json(
                { success: false, message: "Product already exists with this ID." },
                { status: 409 }
            );
        }

        // Create the product
        const newProduct = await Product.create(body);

        return NextResponse.json(
            { success: true, product: newProduct },
            { status: 201 }
        );

    } catch (error) {
        console.error("Error saving product:", error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
