import express from "express"
import { addBlog, deleteBlog, getAllBlogs, getById, getByUserId, updateBlog } from "../controllers/blog";

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getById)
router.post("/add", addBlog);
router.put("/update/:id", updateBlog)
router.delete("/:id", deleteBlog);
router.get("/user/:id", getByUserId)
export default router