import {NextResponse, NextRequest} from 'next/server'
import { connectDB } from '@/lib/mongodb'
import bcrypt from 'bcrypt'
import User from '@/models/User'
import { SignJWT } from 'jose'

export async function POST (request: NextRequest) {
    const {email, password} = await request.json()

   try {
    await connectDB()
    const userFound = await User.findOne({email})
    
    const comparedPass = await bcrypt.compare(password, userFound.password)

    if(comparedPass){
        const jwt = await new SignJWT({
            id : userFound._id,
            email: userFound.email,
        })
        .setProtectedHeader({alg: 'HS256'})
        .setExpirationTime('1h')
        .sign(new TextEncoder().encode(process.env.JWT_SECRET))


        return NextResponse.json({message: 'logged in', status: 200, token: jwt})
    }else {
        return NextResponse.json({message: 'user not found', status: 404})
    }
   } catch (error) {
    return NextResponse.json({message: 'failed', status: 500})
   }


}