import { Kafka } from "kafkajs";
import dotenv from "dotenv";
dotenv.config();

const kafka = new Kafka({
  clientId: "fee-service",
  brokers: [process.env.KAFKA_BROKER],
});

const consumer = kafka.consumer({
    groupId: "fee-group",
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