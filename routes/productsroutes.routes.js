const express = require("express")
const productsApiController = require("../controllers/products.controller")
const router = express.Router()

router.get("/:title?",productsApiController.getProducts)

router.post("/", productsApiController.createProduct)

// router.update("/", productsApiController.updateProduct)

router.delete("/:title", productsApiController.deleteProduct)

module.exports = router