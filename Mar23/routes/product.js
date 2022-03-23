const express = require("express");
const router = express.Router();
const productsController = require("../controllers/product");
router.get("/", productsController.getProducts);
router.post("/", productsController.createProducts);
router.put("/:id", productsController.editProducts);
router.get("/:id", productsController.getProductWithId);
router.delete("/:id", productsController.deleteProductWithId);
router.get("/searchproduct/:name", productsController.getProductWithName);
router.get(
  "/searchproduct/availability/:availability",
  productsController.getProductWithAvailability
);
router.get(
  "/searchproduct/price/:price",
  productsController.getProductWithPrice
);

module.exports = router;
