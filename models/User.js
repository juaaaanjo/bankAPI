const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email address"],
  },
  firstName: {
    type: String,
    required: [true, "Please enter a first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter a last name"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
  _id: { type: mongoose.Schema.Types.ObjectId },
});

module.exports = mongoose.model("User", UserSchema);
