import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
import Task from "../models/Task.js";
import User from "../models/User.js";

const router = express.Router();

// create
router.post("/tasks", verifyToken, async (req, res) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;
    console.log(req.userID);

    const task = new Task({
      title,
      description,
      status: status || "pending",
      priority: priority || "medium",
      dueDate: dueDate || null,
      user: req.userID,
    });

    const savedTask = (await task.save())

    await User.findByIdAndUpdate(req.userID, {
      $push: { tasks: savedTask._id },
    })
    const populatedTask = await Task.findById(savedTask._id).populate("user", "fullname phone");

    res.status(201).json(populatedTask);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get current user's tasks
router.get("/tasks", verifyToken, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userID }).populate(
      "user",
      "fullname phone"
    );
    if (tasks.length === 0) {
      return res.status(404).json({ message: "No tasks found" });
    }

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// get all users tasks
router.get("/tasks/all", verifyToken, async (req, res) => {
  try {
    const tasks = await Task.find().populate("user", "fullname phone");
    if (tasks.length === 0) {
      return res.status(404).json({ message: "No tasks found" });
    }
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get one specific task
router.get("/tasks/:id", verifyToken, async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId).populate("user", "fullname phone");
    if (!task) {
      return res
        .status(404)
        .json({ message: `Task with ID ${taskId} not found` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Delete
router.delete("/tasks/:id", verifyToken, async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByIdAndDelete(taskId);
    if (!task) {
      return res
        .status(404)
        .json({ message: `Task with ID ${taskId} not found` });
    }
    await User.findByIdAndUpdate(task.user, {
      $push: { tasks: taskId },
    });
    res.status(200).json({ message: `Task with ID ${taskId} deleted` });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Update task
router.put("/tasks/:id", verifyToken, async (req, res) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;

    const taskId = req.params.id;

    const task = await Task.findByIdAndUpdate(
      { _id: taskId },
      {
        title,
        description,
        status,
        priority,
        dueDate,
      },
      { new: true }
    ).populate("user", "fullname phone");
    if (!task) {
      return res
        .status(404)
        .json({ message: `Task with ID ${taskId} not found` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
