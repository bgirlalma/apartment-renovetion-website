const mongoose = require("mongoose");

const schemasUser = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required!"],
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("User", schemasUser);
