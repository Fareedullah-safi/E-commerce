import Product from "@/Lib/Models/Product";
import connectDB from "@/Lib/DB/Db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { id } = await params
    try {
        await connectDB()

        const product = await Product.findById(id)
        if (!product) {
            return NextResponse.json({ message: "Product not found", status: 404 })
        }
        return NextResponse.json({ status: 201, success: true, message: "Product found", product })

    } catch (error) {
        return NextResponse.json({ status: 501, error, message: "some error in backend" })
    }
}