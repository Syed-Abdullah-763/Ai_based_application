import express from "express";
import {
  changePasswordController,
  forgetPasswordController,
  loginController,
  resendOtpController,
  signupController,
  verifyOtpController,
} from "../controllers/auth.js";

const authRoute = express.Router();

// login signup
authRoute.post("/signup", signupController);
authRoute.post("/login", loginController);

// otp
authRoute.post("/verify-otp", verifyOtpController);
authRoute.post("/resend-otp", resendOtpController);

// password
authRoute.post("/forget-password", forgetPasswordController);
authRoute.post("/change-password", changePasswordController);

export default authRoute;
