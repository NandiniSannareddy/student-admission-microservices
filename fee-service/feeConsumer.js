import {consumer} from './config/kafka.js';
import Student from './studentModel.js';

const startConsumer=async()=>{
    try{
        await consumer.subscribe({
            topic:process.env.KAFKA_TOPIC,
            fromBeginning:true
        })
        console.log("Waitiong for student registrations")

        await consumer.run({
            eachMessage: async({topic, partition, message})=>{
                const student= JSON.parse(message.value.toString());
                console.log("new student received");
                console.log(student);
                let fee=0;
                if(student.year=="1st Year"){
                    fee=1000;
                }
                else if(student.year=="2nd Year"){
                    fee=2000;
                }
                else if(student.year=="3rd Year"){
                    fee=3000;
                }
                else{
                    fee=4000;
                }
                await Student.findOneAndUpdate({email: student.email}, {fee:fee});
            }
        })


    }
    catch(error){
        console.log("consumer error", error);
    }
}

export {startConsumer};