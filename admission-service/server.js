import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { connectProducer } from './config/kafka.js';
import studentRoutes from './studentRoutes.js';

dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);

const startserver=async()=>{
    try{
        await connectDB();
        await connectProducer();

        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`);
        })
    }
    catch(error){
        console.error("Error starting server:", error);
    }
}

startserver();