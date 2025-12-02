import mongoose from "mongoose";

export const dbConnect = () => {
  const URI = process.env.MONGO_DB_URI;

  mongoose
    .connect(URI)
    .then(() => console.log("MongoDb is Connected!"))
    .catch((error) => console.log(error.message));
};
