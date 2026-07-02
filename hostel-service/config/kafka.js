import { Kafka } from "kafkajs";
import dotenv from "dotenv";
dotenv.config();

const kafka = new Kafka({
  clientId: "hostel-service",
  brokers: [process.env.KAFKA_BROKER],
});

const consumer = kafka.consumer({
    groupId: "hostel-group",
});

const connectConsumer = async () => {
    try{
        await consumer.connect();
        console.log("Kafka Consumer Connected");
    }
    catch(error){
        console.error("Error connecting Kafka Consumer:", error);
    }
}

export { consumer, connectConsumer };