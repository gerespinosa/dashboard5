import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST (request: NextRequest) {

    const {imageUrl, userId} = await request.json()
    console.log('Lo que llega', imageUrl, userId)

    try {
        await connectDB()
        const findUser = await User.findByIdAndUpdate(userId, {imageUrl})
        return NextResponse.json({findUser, status: 200})
    } catch (error) {
        return NextResponse.json({error: error, status: 500})
    }   
}