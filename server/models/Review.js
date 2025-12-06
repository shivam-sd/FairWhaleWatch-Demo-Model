const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    name:String,
    review:String,
    rating:Number,
    image:String
});


const model = mongoose.model("Review", reviewSchema);


module.exports = model;