const express = require("express");
const providersApiController = require("../controllers/providers.controller");
const router = express.Router();


router.get("/:company_name?", providersApiController.getProvider);
router.post("/", providersApiController.createProvider);
router.put("/:company_name", providersApiController.createProvider);

router.delete("/:company_name", providersApiController.deleteProvider)

module.exports = router