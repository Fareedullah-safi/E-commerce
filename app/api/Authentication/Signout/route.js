import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"
export async function POST(req) {
    try {
        const SetToken = jwt.sign(null)
        return NextResponse({ status: 201, message: "User signout successfully" })
    } catch (error) {
        console.error(error)
        return NextResponse({ status: 501, message: "server error try again latter" })
    }
}