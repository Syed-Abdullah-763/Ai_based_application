import express from "express";
import authMiddilware from "../middlewares/auth.js";
import { upload } from "../middlewares/multer.js";
import { imageUploadController } from "../controllers/image.js";

const imageRoute = express.Router();

imageRoute.post(
  "/image",
  [authMiddilware, upload.single("profileImage")],
  imageUploadController
);

export default imageRoute;
