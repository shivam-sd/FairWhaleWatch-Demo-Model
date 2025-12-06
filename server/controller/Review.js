const ReviewModel = require("../models/Review");
const cloudinary = require("cloudinary").v2;

const reviewAdd = async (req, res) => {
  try {
    const { name, review, rating } = req.body;

    // Validation
    if (!name || !review || !rating) {
      return res.status(400).json({ message: "All fields are required" });
    }

    
    const file = req.files?.image;
    if (!file) {
      return res.status(400).json({ message: "Image not found" });
    }

    // Allowed formats
    const formats = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/avif"
    ];

    if (!formats.includes(file.mimetype)) {
      return res.status(400).json({ error: "Invalid image format" });
    }

    // Upload to Cloudinary
    const uploadedImage = await cloudinary.uploader.upload(
      file.tempFilePath,
      { folder: "reviews" }
    );

    // Create review 
    const newReview = await ReviewModel.create({
      name,
      review,
      rating,
      image: uploadedImage.secure_url
    });

    return res.status(200).json({
      message: "Review added successfully",
      data: newReview
    });

  } catch (err) {
    console.log("Error in Review:", err);
    return res.status(500).json({
      message: "Internal Server Error",
      error: err.message
    });
  }
};



const getAllReview = async (req, res) => {
  try {
    const allReview = await ReviewModel.find().sort({ createdAt: -1 });

    return res.status(200).json({
      message: "All Reviews Fetched Successfully",
      data: allReview
    });

  } catch (err) {
    console.log("Error in fetching reviews:", err);

    return res.status(500).json({
      message: "Internal Server Error",
      error: err.message
    });
  }
};


module.exports = {
  reviewAdd,
  getAllReview
};
