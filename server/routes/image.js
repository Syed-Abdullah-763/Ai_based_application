import express from "express";
import authMiddilware from "../middlewares/auth.js";
import { upload } from "../middlewares/multer.js";
import { imageUploadController } from "../controllers/image.js";
import { limiter } from "../config/rateLimit.js";

const imageRoute = express.Router();

imageRoute.post(
  "/image",
  [authMiddilware, upload.single("profileImage"), limiter],
  imageUploadController
);

export default imageRoute;
