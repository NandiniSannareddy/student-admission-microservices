import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { connectConsumer } from './config/kafka.js';
import { startConsumer } from './hostelConsumer.js';
import express from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5003;

app.get("/", (req, res) => {
    res.send("Hostel Service is running");
});

const startserver=async()=>{
    try{
        await connectDB();
        await connectConsumer();
        app.listen(PORT, () => {
            console.log(`Hostel Service health server running on port ${PORT}`);
        })
        await startConsumer();
    }
    catch(error){
        console.error("Error starting server:", error);
    }
}

startserver();