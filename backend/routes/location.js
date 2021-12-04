var express = require("express");
const LocationController = require("../controllers/LocationController");

var router = express.Router();

router.get("/", LocationController.locationList);

module.exports = router;
