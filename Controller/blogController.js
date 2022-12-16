const Blog = require("../Model/blogModel");

const createBlog = async (req, res) => {
  const { title, body } = req.body;
  try {
    const blog = await Blog.create({ title, body });
    blog.save();
    return res.status(200).send({ message: "Blog Created", blog });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const AllBlogs = await Blog.find({});
    return res.status(200).send({ AllBlogs });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getSingleBlog = async (req, res) => {
  try {
    let blog = await Blog.findOne({ _id: req.params.id }).populate(
      "descriptions"
    );
    return res.status(200).send({
      status: true,
      blog,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).send({ message: "Blog Updated", updatedBlog });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    await Blog.findByIdAndDelete(id);
    return res.status(200).send({ message: "Blog Deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
