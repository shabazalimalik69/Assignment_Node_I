const mongoose = require("mongoose");
const moment = require("moment");
const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userId",
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
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

const Review = mongoose.model("description", reviewSchema);

module.exports = Review;
