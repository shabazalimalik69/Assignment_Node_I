const mongoose = require("mongoose");
const moment = require("moment");
const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, unique: true },
    body: { type: String, required: true, trim: true },
    createdAt: {
      type: String,
      default:
        moment().format("YYYY/MM/DD") + "/" + moment().format("hh/mm/ss"),
    },
    updatedAt: {
      type: String,
      default:
        moment().format("YYYY/MM/DD") + "/" + moment().format("hh/mm/ss"),
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

blogSchema.virtual("descriptions", {
  ref: "description",
  foreignField: "userId",
  localField: "_id",
});

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
