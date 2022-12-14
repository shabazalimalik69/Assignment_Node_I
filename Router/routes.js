const express = require("express");
const { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } = require("../Controller/productController");
const { createReview, deleteReview } = require("../Controller/reviewController");

const Router = express.Router();

Router.post("/create_Product",createProduct)
Router.get("/get_All_Products",getAllProducts)
Router.get("/product/:id",getSingleProduct)
Router.put("/updateProduct/:id",updateProduct)
Router.delete("/deleteProduct/:id",deleteProduct)

Router.post("/createReview",createReview)
Router.delete("/deleteReview/:id",deleteReview)

module.exports = Router;