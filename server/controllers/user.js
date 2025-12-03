import userModel from "../models/user.js";

export const getUserController = async (req, res) => {
  try {
    const userId = req.userId;

    const response = await userModel.findById(userId);

    const data = {
      name: response.name,
      email: response.email,
      age: response.age,
      imageUrl: response.imageUrl,
    };

    res.status(200).json({
      message: "User got Seccessfully",
      status: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

export const updateUserController = async (req, res) => {
  try {
    const obj = req.body;
    const userId = req.userId;

    const response = await userModel.findByIdAndUpdate(userId, obj, {
      new: true,
    });

    const data = {
      name: response.name,
      email: response.email,
      age: response.age,
      imageUrl: response.imageUrl,
    };

    res.status(200).json({
      message: "User got Seccessfully",
      status: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};
