const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      index: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);
CategorySchema.plugin(uniqueValidator, { message: "not unique" });

module.exports = mongoose.model("Category", CategorySchema);
