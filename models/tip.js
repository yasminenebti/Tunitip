const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const slug = require("slug");

const TipSchema = new mongoose.Schema(
  {
    name: { type: String, maxlength: 256 },
    slug: { type: String, lowercase: true, unique: true, index: true },
    place: { type: String },
    description: { type: String },
    image: { type: String },
    price: { type: Number, min: 0 },
    review: { type: Number, default: 0 },
    rooms: { type: Number },
    beds: { type: Number },
    baths: { type: Number },
    host: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

TipSchema.plugin(uniqueValidator, { message: "is not unique" });
TipSchema.pre("validate", function (next) {
  if (!this.slug) {
    this.slugify();
  }
  next();
});

TipSchema.methods.slugify = function () {
  this.slug = slug(this.name) + "-" + Math.random().toString(16).substr(2, 8);
};

module.exports = mongoose.model("Tip", TipSchema);
