import {NextRequest, NextResponse} from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Transaction from '@/models/Transaction'

export async function POST (request: NextRequest) {

    try {
        const {desc, amount, category, userId} = await request.json()
        console.log('Esto es lo que llega', { desc, amount, category, userId });        
    
        await connectDB()
        const newTransaction = await new Transaction({
            desc,
            amount,
            category,
            userId
        })
        const transactionSaved = await newTransaction.save()
    
        return NextResponse.json({transaction: transactionSaved, status: 200})

    } catch (error) {
        return NextResponse.json({error: 'Transaction not created', status: 500})
    }

}