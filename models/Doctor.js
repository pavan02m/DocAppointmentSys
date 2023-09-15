import mongoose, { Schema } from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
    },
    firstName: {
      type: String,
      reuired: [true, "First name is required"],
    },
    lastName: {
      type: String,
      reuired: [true, "Last name is required"],
    },
    phone: {
      type: String,
      reuired: [true, "Phone no is required"],
    },
    email: {
      type: String,
      reuired: [true, "email is required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      reuired: [true, "address is required"],
    },
    specialization: {
      type: String,
      reuired: [true, "specialization is required"],
    },
    experience: {
      type: String,
      reuired: [true, "experience is required"],
    },
    feesPerCunsultation: {
      type: Number,
      reuired: [true, "fee is required"],
    },
    status: {
      type: String,
      default: "pending",
    },
    startTime: {
      type: String,
      reuired: [true, "time is required"],
    },
    startTime: {
      type: String,
      reuired: [true, "time is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("doctor", doctorSchema);
