const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");
const DBConnection = require("./DB/DBConnection");
const  HeroSection  = require("./routes/HeroSection");
const HeroWatches = require("./routes/HeroWatches");
const HeroWomenWatch = require("./routes/HeroWomenWatches");


DBConnection();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/",
}));


app.use("/admin", HeroSection);
app.use("/admin", HeroWatches);
app.use("/admin", HeroWomenWatch);

app.get("/", (req,res) => {
    res.status(200).json({message:"Hello"});
});


app.listen(PORT, () => {
    console.log(`App is Running at PORT ${PORT}`);
})