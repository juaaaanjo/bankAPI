const mongoose = require("mongoose");

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
const accountNumber = randomNumber(11111111111, 99999999999);

const AccountSchema = new mongoose.Schema({
  account: {
    type: Number,
    required: [false],
    default: accountNumber,
  },
  alias: {
    type: String,
    required: [true, "Please enter an alias"],
  },
  balance: {
    type: String,
    required: [false],
  },
  accountType: {
    type: String,
    required: [true, "Please enter an account Type"],
  },
});

module.exports = mongoose.model("Account", AccountSchema);
