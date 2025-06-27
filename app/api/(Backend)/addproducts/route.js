import connectDB from "@/Lib/DB/Db";
import Product from "@/Lib/Models/Product";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();
        const { id } = body;

        // Check if product with this ID already exists
        const idExist = await Product.findOne({ id });

        if (idExist) {
            return NextResponse.json(
                { success: false, message: "Product with this ID already exists" },
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
