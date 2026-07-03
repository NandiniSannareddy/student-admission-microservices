import Student from "./studentModel.js"
import {producer} from "./config/kafka.js"

export const register=async(req, res)=>{
    try{
        const student = await Student.create(req.body);
        console.log("Student saved:", savedStudent);
        await producer.send({
            topic:process.env.KAFKA_TOPIC,
            messages:[
                {
                    key:req.body.department,
                    value:JSON.stringify(student)
                }
            ]
        })
        res.status(201).json({ message: "Student registered successfully" });

    }
    catch(error){
        console.error("Error registering student:", error);
        res.status(500).json({ message: "Error registering student" });
    }
}

export const students=async(req, res)=>{
    try{
        const year=req.query.year;
        let students;
        if(year){
            students=await Student.find({year:year});
        }
        else{
            students=await Student.find();
        }
        res.status(200).json({success: true, students});
    }
    catch(error){
        res.status(500).json({ message: "Error fetching students" });
    }
}