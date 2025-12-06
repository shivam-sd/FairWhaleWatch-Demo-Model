const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({
    subheading:String,
    heading:String,
    usecode:String
});

const model = mongoose.model("HeroSection", HeroSchema);

module.exports = model;