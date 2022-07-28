const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const cors = require("cors");

//database connection
mongoose.connect(process.env.MONGO_DB_URI);
mongoose.connection.on("connected", () => {
  console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
  console.log("DB connection failed with -", err);
});

//Routes import
const categoryRoutes = require("./routes/category.routes");
const authRoutes = require("./routes/user.routes");
const tipRoutes = require("./routes/tip.routes");

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"));

app.use("/api/category", categoryRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tips", tipRoutes);
//server listenning
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
