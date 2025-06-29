import AddToCard from "@/Lib/Models/AddToCard";
import connectDB from "@/Lib/DB/Db";
import { NextResponse } from "next/server";
<<<<<<< HEAD
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"

export async function GET(req) {
    const SECRET = process.env.JWT;
    try {
        await connectDB()
        const token = await cookies().get("token")?.value;
        if (!token) {
            return NextResponse.json({ status: 401, message: "Unauthorize: No token" })
        }
        const decoded = jwt.verify(token, SECRET)
        const userId = decoded.id;

        const Products = await AddToCard.find({ userId })
        return NextResponse.json({ status: 201, message: "P F", Products })
    } catch (error) {
        console.error(error)
        NextResponse.json({ status: 500, message: "Server error", error: error.message })
=======

export async function GET(req) {
    try {
        await connectDB()
        const Products = await AddToCard.find()
        return NextResponse.json({ status: 201, message: "products found", Products })
    } catch (error) {
        console.error(error)
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
    }
}