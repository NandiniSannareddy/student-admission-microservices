import { Kafka } from "kafkajs";
import dotenv from "dotenv";
dotenv.config();

const kafka = new Kafka({
  clientId: "email-service",
  brokers: [process.env.KAFKA_BROKER],
    ssl: true,

  sasl: {
    mechanism: "plain",
    username: process.env.KAFKA_USERNAME,
    password: process.env.KAFKA_PASSWORD,
  },
});

const consumer = kafka.consumer({
    groupId: "email-group",
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