import jwt from "jsonwebtoken";

const authMiddilware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  const isVerify = jwt.verify(token, process.env.PRIVATE_KEY);

  console.log(token.id);

  if (token) {
    req.userId = isVerify.id;

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
