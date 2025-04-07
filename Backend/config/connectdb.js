import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

if(!process.env.MONGODB_URI)
{
    throw new Error(
        "Please provide MONGODB_URI in the .env file"
    )
}

async function connectdb()
{
    try
    {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected with db");
    }
    catch(err)
    {
        console.log("MongoDB connection error" + err);
        process.exit(1);
    }
}

export default connectdb;