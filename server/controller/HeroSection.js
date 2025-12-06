const HeroSectionModel = require("../models/HeroSection");


// CREATE HERO SECTION
const HeroSection = async (req, res) => {
  try {
    const { subheading, heading, usecode } = req.body;

    const data = await HeroSectionModel.create({
      subheading,
      heading,
      usecode,
    });

    return res.status(200).json({
      message: "Hero section added successfully",
      data,
    });
  } catch (err) {
    console.log("Internal Server Error", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};



// FETCH ALL HERO SECTION DETAILS
const fetchHeroSectionDetails = async (req, res) => {
  try {
    const details = await HeroSectionModel.find();
    return res.status(200).json({ details });
  } catch (err) {
    console.log("Error in fetching details:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};



// ✅ FETCH SINGLE HERO SECTION BY ID (important for update page)
const fetchHeroSectionById = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await HeroSectionModel.findById(id);

    if (!data) {
      return res.status(404).json({ message: "Hero Section not found" });
    }

    return res.status(200).json({ details: data });

  } catch (err) {
    console.log("Error fetching single hero section:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};



// UPDATE HERO SECTION BY ID
const HeroSectionUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, subheading, usecode } = req.body;

    const updatedData = await HeroSectionModel.findByIdAndUpdate(
      id,
      { heading, subheading, usecode },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ message: "Hero section not found" });
    }

    return res.status(200).json({
      message: "Hero section updated successfully",
      data: updatedData,
    });

  } catch (err) {
    console.log("Internal Server Error", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};



module.exports = {
  HeroSection,
  fetchHeroSectionDetails,
  fetchHeroSectionById, 
  HeroSectionUpdate,
};
