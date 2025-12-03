import express from "express";
import authMiddilware from "../middlewares/auth.js";
import {
  getUserController,
  updateUserController,
} from "../controllers/user.js";

const userRoute = express.Router();

userRoute.get("/user", authMiddilware, getUserController);
userRoute.put("/user", authMiddilware, updateUserController);

export default userRoute;
