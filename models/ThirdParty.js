const mongoose = require("mongoose");

const ThirdPartySchema = new mongoose.Schema({
  account: {
    type: Number,
    required: [true, "Please enter an account number"],
  },
  alias: {
    type: String,
    required: [true, "Please enter an alias"],
  },
   currency: {
    type: String,
    required: [true],
  },
  accountType: {
    type: String,
    required: [true, "Please enter an account Type"],
  },
  finantialInstitution: {
    type: String,
    required: [true, "Please enter a bank"],
  },
  accountHolderID: {
    type: String,
    required: [true, "Please enter an ID"],
  },
});

module.exports = mongoose.model("ThirdParty", ThirdPartySchema);
