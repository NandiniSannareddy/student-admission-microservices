import { Kafka } from "kafkajs";
import dotenv from "dotenv";
dotenv.config();
const kafka = new Kafka({
  clientId: "admission-service",
  brokers: [process.env.KAFKA_BROKER],
});

const producer = kafka.producer();

const connectProducer = async () => {
    try{
        await producer.connect();
        console.log("Kafka Producer Connected");
    }
    catch(error){
        console.error("Error connecting Kafka Producer:", error);
    }
}

export { producer, connectProducer };