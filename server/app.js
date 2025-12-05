import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./config/db.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import imageRoute from "./routes/image.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Mongo DB Config
dbConnect();

// Routes
app.use("/api/auth", authRoute);
app.use("/api", userRoute);
app.use("/api", imageRoute);

app.get("/", (req, res) => {
  res.json({
    message: "Server is running...",
  });
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
