import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone:{
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true, 
  },
  hostelRequired: {
    type: Boolean,
    required: true,
  },
  emailSent: {
    type: Boolean,
    default: false,
  },
  libraryCardID: {
    type: String,
    default:""
  },
  department: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    default: 0,
  },
  hostelRoomNumber: {
    type: Number,
    default: null,
  },




}, {
    timestamps: true
});


export default mongoose.model("Student", studentSchema);