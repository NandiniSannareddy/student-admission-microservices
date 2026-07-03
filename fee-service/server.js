import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { connectConsumer } from './config/kafka.js';
import { startConsumer } from './feeConsumer.js';
import express from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

app.get("/", (req, res) => {
    res.send("Fee Service is running");
});

const startserver=async()=>{
    try{
        await connectDB();
        await connectConsumer();
        await startConsumer();
        app.listen(PORT, () => {
            console.log(`Fee Service health server running on port ${PORT}`);
        });
    }
    catch(error){
        console.error("Error starting server:", error);
    }
}

startserver();