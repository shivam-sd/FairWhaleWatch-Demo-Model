const express = require("express");
const { addWatches, getwatches } = require("../controller/HeroWatches");
const router = express.Router();


router.post("/herowatch", addWatches);
router.get("/herosection/getwatches", getwatches);



module.exports = router;