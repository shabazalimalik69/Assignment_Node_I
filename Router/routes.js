const express = require("express");
const { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } = require("../Controller/productController");

const Router = express.Router();

Router.post("/create_Product",createProduct)
Router.get("/get_All_Products",getAllProducts)
Router.get("/product/:id",getSingleProduct)
Router.put("/updateProduct/:id",updateProduct)
Router.delete("/deleteProduct/:id",deleteProduct)

module.exports = Router;