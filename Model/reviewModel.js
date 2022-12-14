const mongoose = require("mongoose");
const moment = require('moment');
const reviewSchema = new mongoose.Schema(
  {
    // userId:{type:String},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userId",
        required: true,
    },
    review: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
      type: String,
      default: moment().format("YYYY/MM/DD") +"/"+ moment().format("hh/mm/ss"),
  },
  updatedAt: {
      type: String,
      default: moment().format("YYYY/MM/DD") +"/"+ moment().format("hh/mm/ss"),
  },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    }
);

const Review = mongoose.model("review", reviewSchema);

module.exports = Review;
