import express from "express"
import { addBlog, deleteBlog, getAllBlogs, getById, getByUserId, updateBlog } from "../controller/blog-controller.js"

const blogrouter =express.Router()

blogrouter.get("/",getAllBlogs)
blogrouter.post("/addblog",addBlog)
blogrouter.put("/update/:id",updateBlog)
blogrouter.get("/:id",getById)
blogrouter.delete("/:id",deleteBlog)
blogrouter.get("/user/:id",getByUserId)

export default blogrouter