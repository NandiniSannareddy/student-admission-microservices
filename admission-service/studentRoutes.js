import express from "express";
import { register, students } from "./studentController.js";

const router=express.Router();

router.post("/register", register);
router.get("/", students);

export default router;