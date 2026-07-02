import {consumer} from './config/kafka.js';
import Student from './studentModel.js';

const startConsumer=async()=>{
    try{
        await consumer.subscribe({
            topic:process.env.KAFKA_TOPIC,
            fromBeginning:true
        })
        console.log("Waiting for student registrations")

        await consumer.run({
            eachMessage: async({topic, partition, message})=>{
                const student= JSON.parse(message.value.toString());
                console.log("new student received");
                console.log(student);
                const count= await Student.countDocuments({libraryCardID:{$ne:""}});
                const libraryCardID="LIB"+(count+1001);
                await Student.findOneAndUpdate({email: student.email}, {libraryCardID:libraryCardID});
            }
        })


    }
    catch(error){
        console.log("consumer error", error);
    }
}

export {startConsumer};