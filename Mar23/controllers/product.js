const Product = require("../models/product");
exports.getProducts = (req, res) => {
  Product.find((err, products_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(products_list);
    }
  });
};
exports.createProducts = (req, res) => {
  productObj = new Product(req.body);
  productObj.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json(" product added successfully");
    }
  });
};
exports.editProducts = (req, res) => {
  const updatedProduct = req.body;
  Product.findByIdAndUpdate(req.params.id, updatedProduct, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`product with id ${req.params.id} is updated`);
    }
  });
};
exports.getProductWithId = (req, res) => {
  Product.findById(req.params.id).exec((err, product) => {
    if (err) {
      res.json(err);
    } else {
      res.json(product);
    }
  });
};
exports.deleteProductWithId = (req, res) => {
  Product.findByIdAndDelete(req.params.id).exec((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json(` product with id ${req.params.id} deleted`);
    }
  });
};
exports.getProductWithName = (req, res) => {
  Product.find({ name: req.params.name }).exec((err, product) => {
    if (err) {
      res.json(err);
    } else {
      res.json(product);
    }
  });
};
exports.getProductWithAvailability = (req, res) => {
  Product.find({ availability: req.params.availability }).exec(
    (err, product) => {
      if (err) {
        res.json(err);
      } else {
        res.json(product);
      }
    }
  );
};
exports.getProductWithPrice = (req, res) => {
  Product.find({ price: { $gte: req.params.price } }).exec((err, product) => {
    if (err) {
      res.json(err);
    } else {
      res.json(product);
    }
  });
};
