import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Transaction from "@/models/Transaction";

export async function PATCH (request: NextRequest) {

    const {transactionId, desc, amount, category, userId} = await request.json()
    console.log("Lo que llega: ", transactionId, desc, amount, category, userId)

    try {
        await connectDB()
        const findTransaction = await Transaction.findByIdAndUpdate(
            transactionId, 
            { desc, amount, category, userId },
            { new: true }
          )

        return NextResponse.json({findTransaction: findTransaction, status: 200})
    } catch (error) {
        return NextResponse.json({status: 500, error: error})

    }

    
}