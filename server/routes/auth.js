import express from "express";
import {
  changePasswordController,
  forgetPasswordController,
  loginController,
  resendOtpController,
  signupController,
  verifyOtpController,
} from "../controllers/auth.js";
import { limiter } from "../config/rateLimit.js";

const authRoute = express.Router();

// login signup
authRoute.post("/signup", limiter, signupController);
authRoute.post("/login", limiter, loginController);

// otp
authRoute.post("/verify-otp", limiter, verifyOtpController);
authRoute.post("/resend-otp", limiter, resendOtpController);

// password
authRoute.post("/forget-password", limiter, forgetPasswordController);
authRoute.post("/change-password", limiter, changePasswordController);

export default authRoute;
