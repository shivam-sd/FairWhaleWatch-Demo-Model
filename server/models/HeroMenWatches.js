const mongoose = require("mongoose");

const HeroWatchesSchema = mongoose.Schema({
    description:String,
    highprice:Number,
    lowprice:Number,
    image:String,
    hoverimage:String
});


const model = mongoose.model("HeroWatches", HeroWatchesSchema);

module.exports = model;