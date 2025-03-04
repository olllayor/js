import express from "express";
import users from "./routes/users.js";
import auth from "./routes/auth.js";
import tasks from "./routes/tasks.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("tiny"));


app.use("/api", users);
app.use("/api", auth);
app.use("/api", tasks);

app.get("/", (req, res) => {
  //test
  res.cookie("hello", "world", { maxAge: 60000 });
  res.send("Welcome to the Task Manager API");
});

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
