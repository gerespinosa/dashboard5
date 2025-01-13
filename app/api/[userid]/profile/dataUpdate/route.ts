import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from 'bcrypt';

export async function PATCH(request: NextRequest) {
    try {
        const { email, userId, fullname, newPassword, currentPassword } = await request.json();
        console.log('Received data:', userId, email, fullname, newPassword, currentPassword);

        await connectDB();
        const userFound = await User.findById(userId);

        if (!userFound) {
            return NextResponse.json({ error: "User not found", status: 404 });
        }

        const updatedData: any = {};

        if (email !== ' ' && email !== userFound.email) {
            updatedData.email = email;
        }

        if (fullname !== ' ' && fullname !== userFound.fullname) {
            updatedData.fullname = fullname;
        }

        if (newPassword && currentPassword) {
            const isMatch = await bcrypt.compare(currentPassword, userFound.password);
            if (isMatch) {
                const newHashedPassword = await bcrypt.hash(newPassword, 12);
                updatedData.password = newHashedPassword;
            } else {
                return NextResponse.json({ error: "Current password is incorrect", status: 400 });
            }
        }

        if (Object.keys(updatedData).length > 0) {
            const userUpdate = await User.findByIdAndUpdate(userId, updatedData, { new: true });
            return NextResponse.json({ userUpdate, status: 200 });
        } else {
            return NextResponse.json({ message: "No changes detected", status: 200 });
        }

    } catch (error) {
        return NextResponse.json({ error: error, status: 500 });
    }
}
