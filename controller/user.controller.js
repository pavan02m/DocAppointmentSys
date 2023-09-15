import User from "../models/User.js";
import Doctor from "../models/Doctor.js";

export const applyForDoctor = async (req, res) => {
  try {
    const newDoctor = await Doctor({ ...req.body });
    await newDoctor.save();
    const adminUser = await User.findOne({ isAdmin: true });
    const notification = adminUser.notification;
    notification.push({
      type: "Appy-for-doctor-request",
      message: `${newDoctor.firstName} ${newDoctor.lastName} applied for doctor position`,
      data: {
        docotorId: newDoctor._id,
        name: newDoctor.firstName + " " + newDoctor.lastName,
        onClickPath: "/admin/doctors",
      },
    });
    await User.findByIdAndUpdate(adminUser._id, { notification });
    res.status(200).send({ success: true, message: "Applied Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error });
  }
};

export const getAllNotifications = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.userId });
    const seenNotification = user.seenNotification;
    const notification = user.notification;
    seenNotification.push(...notification);
    user.notification = [];
    user.seenNotification = notification;
    await user.save();
    res
      .status(200)
      .send({ success: true, message: "All Notifications marked as read" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error });
  }
};

export const clearNotification = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.userId });
    user.notification = [];
    user.seenNotification = [];
    await user.save();
    res.status(200).send({ success: true, message: "Cleared" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({ status: "approved" });
    res
      .status(200)
      .send({ success: true, message: "data recieved", data: doctors });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error });
  }
};
