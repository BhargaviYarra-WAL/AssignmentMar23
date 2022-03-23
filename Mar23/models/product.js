var mongoose = require("mongoose");
var ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  availability: { type: String, required: true },
});
module.exports = mongoose.model("Product", ProductSchema);
