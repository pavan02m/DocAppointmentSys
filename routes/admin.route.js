import express from "express";
import { verifyToken } from "../middlewares/validation.js";
import {
  changeStatus,
  getAllDoctors,
  getAllUsers,
} from "../controller/admin.controller.js";
const router = express.Router();

router.get("/get-all-users", verifyToken, getAllUsers);
router.get("/get-all-doctors", verifyToken, getAllDoctors);
router.post("/changeAccountStatus", verifyToken, changeStatus);

export default router;
