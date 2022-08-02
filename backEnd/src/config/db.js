const mongoose = require("mongoose");
const USER = process.env.USER;
const PASS = process.env.PASS;
const DB = process.env.DB;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://${USER}:${PASS}/${DB}`);
    console.log(`MongoDb Connected : ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error ${err.message}`);
    process.exit();
  }
};
module.exports = connectDB;
