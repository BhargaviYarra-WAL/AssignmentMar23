var mongoose = require("mongoose");
var BooksSchema = new mongoose.Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true, maxLength: 100 },

  author: { type: mongoose.Schema.ObjectId, ref: "Author", required: true },
  categories: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: true,
  },
});
module.exports = mongoose.model("Books", BooksSchema);
