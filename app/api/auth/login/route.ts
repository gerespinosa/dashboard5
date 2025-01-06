import {NextResponse, NextRequest} from 'next/server'
import { connectDB } from '@/lib/mongodb'
import bcrypt from 'bcrypt'
import User from '@/models/User'

export async function POST (request: NextRequest) {
    const {email, password} = await request.json()
    console.log('Esto es lo que llega', email, password)

   try {
    await connectDB()
    const userFound = await User.findOne({email})
    
    const comparedPass = await bcrypt.compare(password, userFound.password)

    if(comparedPass){
        return NextResponse.json({message: 'logged in', status: 200})
    }else {
        return NextResponse.json({message: 'user not found', status: 404})
    }
   } catch (error) {
    return NextResponse.json({message: 'failed', status: 500})
   }


}