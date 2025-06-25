import connectDB from "@/DB/Db";
import User from "@/Models/User";

export async function POST(req) {
    try {
        await connectDB()
        const body = await req.json()
    } catch (error) {
        console.error(error)
    }
}