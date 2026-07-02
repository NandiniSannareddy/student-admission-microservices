import {consumer} from './config/kafka.js';
import sendEmail from './emailSending.js';
import Student from './studentModel.js';

const startConsumer=async()=>{
    try{
        await consumer.subscribe({
            topic:process.env.KAFKA_TOPIC,
            fromBeginning:false
        })
        console.log("Waitiong for student registrations")

        await consumer.run({
            eachMessage: async({topic, partition, message})=>{
                const student= JSON.parse(message.value.toString());
                console.log("new student received");
                console.log(student);
                const isemailSent=await sendEmail(student);
                if(isemailSent){
                    await Student.findOneAndUpdate({email:student.email}, {emailSent:true});
                }
                
            }
        })


    }
    catch(error){
        console.log("consumer error", error);
    }
}

export {startConsumer};