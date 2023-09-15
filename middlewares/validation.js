import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    const token = auth.split(" ")[1];
    if (!token)
      return res
        .status(400)
        .json({ status: false, message: "you are not authorized" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(400).json({ status: false, message: err });
      req.user = user;
      next();
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: false, message: "error in token verification" });
  }
};
