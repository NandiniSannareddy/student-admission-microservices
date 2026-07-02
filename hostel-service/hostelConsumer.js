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
                if(student.hostelRequired){
                    const count= await Student.countDocuments({hostelRoomNumber:{$ne:null}});
                    const hostelRoomNumber=count+101;
                    await Student.findOneAndUpdate({email: student.email}, {hostelRoomNumber:hostelRoomNumber});
                }
            }
        })


    }
    catch(error){
        console.log("consumer error", error);
    }
}

export {startConsumer};