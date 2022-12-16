const express = require("express");
const { createBlog, getAllBlogs, getSingleBlog, updateBlog, deleteBlog } = require("../Controller/blogController");
const {
  createReview,
  deleteReview,
} = require("../Controller/reviewController");

const Router = express.Router();

Router.post("/create_Blog", createBlog);
Router.get("/get_All_Blogs", getAllBlogs);
Router.get("/blog/:id", getSingleBlog);
Router.put("/updateBlog/:id", updateBlog);
Router.delete("/deleteBlog/:id", deleteBlog);

Router.post("/createReview", createReview);
Router.delete("/deleteReview/:id", deleteReview);

module.exports = Router;
