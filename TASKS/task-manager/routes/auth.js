import express, { Router } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import e from "express";


dotenv.config();

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { fullname, phone, password } = req.body;

    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res.status(400).json({ error: `User with ${phone} phone number already exists` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      fullname,
      phone,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: `${fullname} registered successfully` });
  } catch (error) {
    res.status(500).json({ error: "Registration failed", error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { fullname, phone, password } = req.body;

    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: "Authentication failed. Try another password!" });
    }
    const token = jwt.sign(
      {
        userID: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

export default router;
