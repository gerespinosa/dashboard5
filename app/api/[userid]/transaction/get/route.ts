import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Transaction from "@/models/Transaction"

export async function POST (request: NextRequest) {

    const {userId} = await request.json()

    try {
        await connectDB()
        const getTransactions = await Transaction.find({userId})

        return NextResponse.json({transactions: getTransactions, status:200})

    }catch(error){
        return NextResponse.json({error: error, status: 500})
    }
}