var express = require("express");
var router = express.Router();
var categoryController = require("../controllers/categories");
router.get("/", categoryController.getCategory);
router.post("/", categoryController.createCategory);
router.delete("/:_id", categoryController.deleteCategory);
router.put("/:_id", categoryController.editCategory);
module.exports = router;
