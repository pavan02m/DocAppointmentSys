import Doctor from "../models/Doctor.js";
import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      status: true,
      message: "data collected successfully",
      data: users,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: false, message: "error in data userData collection" });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.status(200).json({
      status: true,
      message: "data collected successfully",
      data: doctors,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: false, message: "error in data userData collection" });
  }
};

export const changeStatus = async (req, res) => {
  try {
    const { doctorId, status } = req.body;
    const doctor = await Doctor.findByIdAndUpdate(
      doctorId,
      { $set: { status } },
      { new: true }
    );
    console.log(doctor);
    const user = await User.findOne({ _id: doctor.userId });
    const notification = user.notification;
    notification.push({
      type: "request-updated",
      message: `Your request has ${status}`,
      onClickPath: "/notifications",
    });
    user.isDoctor = status === "approved" ? true : false;
    await user.save();
    res
      .status(201)
      .send({ success: true, message: "Account status updated", data: doctor });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};
