const mongoose = require("mongoose");
const moment = require('moment');
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    price: { type: Number, required: true, default: 1 },
    createdAt: {
      type: String,
      default: moment().format("YYYY/MM/DD") +"/"+ moment().format("hh:mm:ss"),
  },
  updatedAt: {
      type: String,
      default: moment().format("YYYY/MM/DD") +"/"+ moment().format("hh:mm:ss"),
  },
  },
 
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
