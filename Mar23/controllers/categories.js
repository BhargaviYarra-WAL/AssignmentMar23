const { validationResult } = require("express-validator");
const Category = require("../models/categories");

function getCategory(req, res) {
  Category.find((err, Categories_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(Categories_list);
    }
  });
}

const createCategory = [
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      console.log(req.body);
      let { name, description } = req.body;
      let CategoryObject = new Category({ name, description });
      CategoryObject.save((error) => {
        if (error) {
          res.json(error);
        } else {
          res.json({ status: "adding Category completed" });
        }
      });
    }
  },
];

function deleteCategory(req, res) {
  Category.findByIdAndDelete(req.params._id, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`Category with _id as ${req.params._id} is removed`);
    }
  });
}
function editCategory(req, res) {
  const updateOb = req.body;
  Category.findByIdAndUpdate(req.params._id, updateOb, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`category with ${req.params._id} updated`);
    }
  });
}
module.exports = { getCategory, createCategory, deleteCategory, editCategory };
