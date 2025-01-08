import {NextResponse, NextRequest} from 'next/server'
import { connectDB } from '@/lib/mongodb'
import User from '@/models/User'
import bcrypt from 'bcrypt'

export async function POST (request: NextRequest) {

    const {fullname, email, password} = await request.json()

    try {
        await connectDB()

        const userFound = await User.findOne({email})

        if(!userFound){

            const hashedPassword = await bcrypt.hash(password, 12)
    
            const newUser = new User ({
                fullname,
                email,
                password: hashedPassword
            })
            const savedUser = await newUser.save()

            return NextResponse.json({message: 'User created', status: 200, savedUser})
        } else {
            return NextResponse.json({message: "User already exists", status: 500})
        }
        
    } catch (error) {
        return NextResponse.json({message: "Error creating the user", status: 500})
    }
}