import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

export const connectDB = async () => {

    try {
        const {connection} = await mongoose.connect(MONGODB_URI)
        if (connection.readyState === 1) {
            console.log('MongoDB Connected')
            return Promise.resolve(true)
        }else{
            console.log('MongoDB connection failed')
        }
    } catch (error) {
        console.log(error)
        return Promise.reject(false)
    }
}