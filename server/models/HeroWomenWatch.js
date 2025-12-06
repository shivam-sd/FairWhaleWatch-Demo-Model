const mongoose = require("mongoose");

const HeroWomenWatchesSchema = mongoose.Schema({
    description:String,
    highprice:Number,
    lowprice:Number,
    image:String,
    hoverimage:String
});


const model = mongoose.model("HeroWomenWatches", HeroWomenWatchesSchema);

module.exports = model;