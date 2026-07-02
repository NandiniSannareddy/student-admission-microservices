import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { connectConsumer } from './config/kafka.js';
import { startConsumer } from './hostelConsumer.js';

dotenv.config();

const startserver=async()=>{
    try{
        await connectDB();
        await connectConsumer();
        await startConsumer();
    }
    catch(error){
        console.error("Error starting server:", error);
    }
}

startserver();