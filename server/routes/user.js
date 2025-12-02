import express from "express";
import authMiddilware from "../middlewares/auth.js";
import { getUserController } from "../controllers/user.js";

const userRoute = express.Router();

userRoute.get("/user", authMiddilware, getUserController);
userRoute.put("/user", authMiddilware);

export default userRoute;
