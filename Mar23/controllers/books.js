const Books = require("../models/books");

exports.createBooks = (request, response) => {
  const { name, description, categories, author } = request.body;
  let BooksOb = new Books({ name, description, categories, author });
  BooksOb.save((err) => {
    if (err) {
      response.json(err);
    } else {
      response.json({ status: 1, data: { msg: "Books created" } });
    }
  });
};
exports.getBooks = (request, response) => {
  Books.find((err, Book_list) => {
    if (err) {
      response.json(err);
    } else {
      response.json({ status: 1, data: { Book_list } });
    }
  });
};
exports.getBooksWithCategory = (request, response) => {
  Books.find()
    .populate("categories")
    .exec((err, Book_list) => {
      if (err) {
        response.json(err);
      } else {
        response.json({ status: 1, data: { Book_list } });
      }
    });
};
exports.getBooksWithAuthor = (req, res) => {
  Books.find()
    .populate("author")
    .exec((err, Book_list) => {
      if (err) {
        res.json(err);
      } else {
        res.json({ status: 1, data: Book_list });
      }
    });
};
exports.getBooksWithCondition = (request, response) => {
  Books.find({ name: request.params.name }).exec((err, Book_list) => {
    if (err) {
      response.json(err);
    } else {
      response.json({ status: 1, data: { Book_list } });
    }
  });
};
exports.getBooksWithId = (request, response) => {
  Books.findById(request.params.id).exec((err, book) => {
    if (err) {
      response.json(err);
    } else {
      response.json(book);
    }
  });
};

exports.getBooksWithCategoryAndAuthor = (request, response) => {
  Books.find()
    .populate("categories")
    .populate("author")
    .exec((err, Book_list) => {
      if (err) {
        response.json(err);
      } else {
        response.json({ status: 1, data: { Book_list } });
      }
    });
};
