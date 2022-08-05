const mongoose = require("mongoose");
const USER = process.env.USER;
const PASS = process.env.PASS;
const DB = process.env.DB;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://${USER}:${PASS}@cluster0.jc8ks.mongodb.net/${DB}?retryWrites=true&w=majority`);
    console.log(`MongoDb Connected : ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error ${err.message}`);
    process.exit();
  }
};
module.exports = connectDB;
