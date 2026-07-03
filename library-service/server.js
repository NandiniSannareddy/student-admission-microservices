import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { connectConsumer } from './config/kafka.js';
import { startConsumer } from './libraryConsumer.js';
import express from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5004;

app.get("/", (req, res) => {
    res.send("Library Service is running");
});

const startserver=async()=>{
    try{
        await connectDB();
        await connectConsumer();
        app.listen(PORT, () => {
            console.log(`Library Service health server running on port ${PORT}`);
        })
        await startConsumer();
    }
    catch(error){
        console.error("Error starting server:", error);
    }
}

startserver();