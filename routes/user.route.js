import express from "express";
import { getUserData } from "../controller/auth.controller.js";
import { verifyToken } from "../middlewares/validation.js";
import {
  applyForDoctor,
  clearNotification,
  getAllDoctors,
  getAllNotifications,
} from "../controller/user.controller.js";
const router = express.Router();

router.get("/getData", verifyToken, getUserData);
router.post("/get-notification", verifyToken, getAllNotifications);
router.post("/clear-notification", verifyToken, clearNotification);
router.post("/apply-doctor", verifyToken, applyForDoctor);
router.get("/getAllDoctors", verifyToken, getAllDoctors);

export default router;
