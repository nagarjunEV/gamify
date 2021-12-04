const Location = require("../models/LocationModel");
const apiResponse = require("../helpers/apiResponse");
const auth = require("../middlewares/jwt");
var mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

/**
 * Location List.
 *
 * @returns {Object}
 */
exports.locationList = [
  auth,
  function (req, res) {
    try {
      Location.find().then((locations) => {
        return apiResponse.successResponseWithData(res, "Operation success", {
          locations: locations.length > 0 ? locations : [],
        });
      });
    } catch (err) {
      //throw error in json response with status 500.
      return apiResponse.errorResponse(res, err);
    }
  },
];
