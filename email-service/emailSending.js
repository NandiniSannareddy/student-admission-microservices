import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendEmail=async(student)=>{
    try{
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: student.email, 
            subject: "Welocome to ABC college",
            html:`
            <div>
            <h1>Hi ${student.name},</h1>
            <p>Your admission has been successfully completed. </p>
            <p><strong>Department:</strong> ${student.department}</p>
            <p><strong>Year:</strong> ${student.year}</p>
            <p>We wish you all the best for your journey with us.</p>
            <br></br>
            <p>Regards,</p> 
            <p>ABC College</p>,
            </div>
            `
        })
        return true
    }
    catch(error){
        console.log("Error sending email:", error);
    }
}

export default sendEmail;