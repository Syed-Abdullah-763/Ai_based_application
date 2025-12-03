import { cloudinaryConfig, cloudinaryUploader } from "../config/cloudinary.js";
import userModel from "../models/user.js";
import fs from "fs";

export const imageUploadController = async (req, res) => {
  try {
    cloudinaryConfig();

    const imageResponse = await cloudinaryUploader.upload(req.file.path);

    await userModel.findByIdAndUpdate(req.userId, {
      imageUrl: imageResponse.secure_url,
    });

    res.status(200).json({
      message: "Profile image has been uploaded",
      status: true,
      url: imageResponse.secure_url,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  } finally {
    fs.unlinkSync(req.file.path);
  }
};
