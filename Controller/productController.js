const Product = require("../Model/productModel");

const createProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const product = await Product.create({ name, price });
    product.save();
    return res.status(200).send({ message: "Product Created" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const AllProducts = await Product.find({});
    return res.status(200).send({ AllProducts });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    return res.status(200).send({ product });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).send({ message: "Product Updated", updatedProduct });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    return res.status(200).send({ message: "Product Deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
