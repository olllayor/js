import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
import User from "../models/User.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const router = express.Router();

//Get all
router.get("/users/", verifyToken, async (req, res) => {
  // console.log(req.headers.cookie);
  // console.log(req.cookies);

  // learning query
  const limit = req.query.limit;

  if (!isNaN(limit) && limit > 0) {
    const limitedUsers = await User.find().limit(limit);
    return res.status(200).json(limitedUsers);
  }
  res.status(200).json(
    await User.find().sort({ createdAt: -1 }).populate({
      path: "tasks",
      select: "title description status priority dueDate",
    })
  );
});

// get one
router.get("/users/:id", verifyToken, async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: `Invalid user ID format` });
    }

    const user = await User.findById(id).populate({
      path: "tasks",
      select: "title status priority dueDate",
    })
    if (user) {
      return res.status(200).json(user);
    }
    res.status(404).json({ message: `User id ${id} not found` });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// delete
router.delete("/users/:id", verifyToken, (req, res) => {
  try {
    const id = req.params.id;

    const user = User.findByIdAndDelete(id);
    if (user) {
      return res.status(200).json({ message: `User id ${id} deleted` });
    }
    res.status(404).json({ message: `User id ${id} not found` });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Update
router.put("/users/:id", verifyToken, async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: `Invalid user ID format` });
    }

    const { fullname, phone, password } = req.body;

    const updateData = { fullname, phone };

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    const user = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ message: `User id ${id} not found` });
    }

    res.status(200).json({
      message: `User id ${id} updated`,
      user: {
        _id: user._id,
        fullname: user.fullname,
        phone: user.phone,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
