import express from "express";
import authMiddilware from "../middlewares/auth.js";
import {
  getUserController,
  updateUserController,
} from "../controllers/user.js";
import { limiter } from "../config/rateLimit.js";

const userRoute = express.Router();

userRoute.get("/user", [authMiddilware, limiter], getUserController);
userRoute.put("/user", [authMiddilware, limiter], updateUserController);

export default userRoute;
