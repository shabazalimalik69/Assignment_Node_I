const Review = require("../Model/reviewModel");

const createReview = async (req, res) => {
  try {
    // let userId = `${Date.now()}${Math.floor(Math.random()*9999999)}`
    let review = await Review.create(req.body);
    review.save();
    return res.status(200).send({ message: "Review Created", review });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    await Review.findByIdAndDelete(id);
    return res.status(200).send({ message: "Review Deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { createReview, deleteReview };
