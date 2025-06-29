import connectDB from "@/Lib/DB/Db";
<<<<<<< HEAD
import Adress from "@/Lib/Models/Address";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
    const SECRET = process.env.JWT;

    try {
        const token = cookies().get("token")?.value;

        if (!token) {
            return NextResponse.json({ status: 401, message: "Token not found" });
        }

        const decoded = jwt.verify(token, SECRET);
        const userId = decoded.id;

        await connectDB();

        const body = await req.json();

        const updatedAddress = await Adress.findOneAndUpdate(
            { userId },
            { ...body },
            { new: true, upsert: true }, // upsert = create if not found
        );
        return NextResponse.json({
            status: 201,
            success: true,
            message: "Address saved successfully",
            Address: updatedAddress
        });

=======
import Adress from "@/Lib/Models/Adress";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();
        const Address = await Adress.create(body)
        return NextResponse.json({ status: 201, success: true, message: "Address added", Address })
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, message: "Server error, try again later" });
    }
}
