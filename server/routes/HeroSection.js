const express = require("express");
const { HeroSection, HeroSectionUpdate, fetchHeroSectionDetails } = require("../controller/HeroSection");
const router = express.Router();

router.post("/herosection", HeroSection);
router.get("/herosection/details", fetchHeroSectionDetails);
router.put("/herosection/update/:id", HeroSectionUpdate);

module.exports = router;