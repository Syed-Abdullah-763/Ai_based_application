import jwt from "jsonwebtoken";

const authMiddilware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (token) {
    req.userId = token.id;

    next();
  } else {
    res.status(401).json({
      message: "Unauth user",
      status: false,
      data: null,
    });
  }
};

export default authMiddilware;
