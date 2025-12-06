const express = require("express");
const { reviewAdd, getAllReview } = require("../controller/Review");
const router = express.Router();   




router.post("/addreview", reviewAdd);
router.get("/getreview", getAllReview);



module.exports = router;
