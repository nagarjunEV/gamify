var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GameSchema = new Schema(
  {
    name: { type: String, required: true },
    players: [{ type: String }],
    time_limit: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Location", GameSchema);
