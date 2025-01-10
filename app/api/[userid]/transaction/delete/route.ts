import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Transaction from "@/models/Transaction";

export async function DELETE (request: NextRequest) {

    const {transactionId} = await request.json()

    try {
        await connectDB()
        const findTransaction = await Transaction.findOneAndDelete({_id:transactionId})

        return NextResponse.json({ status: 200})
    } catch (error) {
        return NextResponse.json({status: 500, error: error})

    }

    
}