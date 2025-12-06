const express = require("express");
const router = express();
const { addWatches, getwatches } = require("../controller/HeroWomenWatch");



router.post("/herowomenwatch", addWatches);
router.get("/herowomensection/getwatches", getwatches);



module.exports = router;