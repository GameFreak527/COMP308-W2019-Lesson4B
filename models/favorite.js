let mongoose = require("mongoose");

//create model class

let favoriteSchema = mongoose.Schema(
  {
    name: String,
    description: String
  },
  {
    collection: "favoriteThings"
  }
);

module.exports = mongoose.model("shiv", favoriteSchema);
