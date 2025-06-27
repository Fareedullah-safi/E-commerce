import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
    cookies().set("token", "", { maxAge: 0, path: "/" });
    return NextResponse.json({ status: 200, message: "Logged out successfully" });
}
