import AddToCard from "@/Lib/Models/AddToCard";
import connectDB from "@/Lib/DB/Db";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
        await connectDB()
        const { ProductId } = params
        await AddToCard.findOneAndDelete(ProductId)
        return NextResponse.json({ status: 201, message: "Product removed", ProductId })
    } catch (error) {
        return NextResponse.json({ status: 501, message: "server busy try again latter" })
    }
}