const HeroWomenWatchesModel = require("../models/HeroWomenWatch");
const cloudinary = require("cloudinary").v2;


const addWatches = async (req, res) => {
  try {
    const { description, lowprice, highprice } = req.body;

    
    const imageFile = req.files?.image;
    const hoverImageFile = req.files?.hoverimage;

    if (!imageFile || !hoverImageFile) {
      return res.status(400).json({ message: "Both images are required" });
    }

    const allowedFormats = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/webp",
      "image/avif"
    ];

   
    if (!allowedFormats.includes(imageFile.mimetype)) {
      return res.status(400).json({ error: "Invalid main image format" });
    }

    if (!allowedFormats.includes(hoverImageFile.mimetype)) {
      return res.status(400).json({ error: "Invalid hover image format" });
    }


    const uploadedImage = await cloudinary.uploader.upload(
      imageFile.tempFilePath,
      { folder: "heroWomenWatches" }
    );

    const uploadedHoverImage = await cloudinary.uploader.upload(
      hoverImageFile.tempFilePath,
      { folder: "heroWomenWatches" }
    );

    const addWatch = await HeroWomenWatchesModel.create({
      description,
      lowprice,
      highprice,
      image: uploadedImage.secure_url,
      hoverimage: uploadedHoverImage.secure_url
    });

    return res.status(200).json({
      message: "Watch added successfully",
      data: addWatch,
    });

  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const getwatches = async (req,res) => {
  try{
    const allWatches = await HeroWomenWatchesModel.find();

    res.status(200).json({message:"All Watches", allWatches});

  }catch(err){
    res.status(500).json({message:"Internal server Error"});
    console.log("Error in Get watch");
  }
}

module.exports = {
  addWatches,
  getwatches
};
