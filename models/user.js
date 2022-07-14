const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      index: true,
      lowercase: true,
    },
    password: {
      type: String,
      minlength: 8,
      required: true,
    },
    isHost: { type: Boolean, default: false },
    phoneNumber: { type: Number },
  },
  {
    timestamps: true,
  }
);
UserSchema.plugin(uniqueValidator, { message: "is not unique" });
module.exports = mongoose.model("User", UserSchema);
