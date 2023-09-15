import Doctor from "../models/Doctor.js";

export const getDoctorInfo = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: " data fetched successfully",
      data: doctor,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in fetching doctor profile info",
    });
  }
};

export const updateDoctorInfo = async (req, res) => {
  try {
    const doctor = await Doctor.findOneAndUpdate(
      { userId: req.body.userId },
      { $set: req.body },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: " data upadted successfully",
      data: doctor,
    });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "error in updating doctor info" });
  }
};
