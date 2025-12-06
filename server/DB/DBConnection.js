const mongoose = require("mongoose");

const DBConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI);

    console.log(`MongoDB Connected:`);
  } catch (err) {
    console.log("MongoDB Connection Failed:");
    console.log(err);
    process.exit(1);
  }
};

module.exports = DBConnection;
