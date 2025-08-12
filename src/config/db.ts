import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
console.log('Connecting to MongoDB...');
console.log(process.env.PORT);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL as string);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};

export default connectDB;
