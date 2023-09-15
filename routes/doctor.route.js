import express from "express";
import { verifyToken } from "../middlewares/validation.js";
import {
  getDoctorInfo,
  updateDoctorInfo,
} from "../controller/doctor.controller.js";
const router = express.Router();

router.post("/getDoctorInfo", verifyToken, getDoctorInfo);
router.post("/updateDoctorInfo", verifyToken, updateDoctorInfo);

export default router;
