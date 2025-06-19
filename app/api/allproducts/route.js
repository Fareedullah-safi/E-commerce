import connectDB from "@/DB/Db";
import Product from "@/Models/Product";
import { NextResponse } from "next/server";
// Get All Products
export async function GET() {
    try {
        await connectDB();
        const products = await Product.find();
        return NextResponse.json({ success: true, products }, { status: 200 });
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}