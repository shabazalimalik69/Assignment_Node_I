const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    price:{type:Number,required:true,trim:true},
},{timestamps:true});

const Product = mongoose.model("product",productSchema);

module.exports = Product;