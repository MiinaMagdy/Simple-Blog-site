import express from 'express';
import mongoose from 'mongoose';
import User from './routes/user.js';
import Blog from "./routes/blog.js";
import dotenv  from "dotenv"

dotenv.config()

const app = express();

app.use(express.json());
app.use("/api/users", User); // 
app.use("/api/blogs", Blog)

mongoose.connect(process.env.MONGODB_URL)
    .then(() => app.listen(5000))
    .then(() => console.log("Connected to Database and listening to localhost:5000"))
    .catch(err => console.log(err));
