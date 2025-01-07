import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST (request: NextRequest) {
    const {userId} = await request.json()
    console.log('Lo que llega:', userId)

    await connectDB()
    const userFound = await User.findById(userId)

    if(!userFound){
        return NextResponse.json({message: "User not found", status: 404})
    } else {
        return NextResponse.json({userFound: userFound, status: 200})
    }

}