require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const userRoutes = require("./routes/User.Routes");
connectDB();
const PORT = process.env.PORT;

//routes
app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);

// app.use(notFound);
// app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is Running on PORT : ${PORT}`);
});
