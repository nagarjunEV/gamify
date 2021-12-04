var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RoomSchema = new Schema(
  {
    number: { type: Number, required: true },
    capacity: { type: Number, required: true },
    capacity_left: { type: Number, required: true },
    game: [
      {
        game_id: { type: Number, required: true },
        is_reserved: { type: Boolean, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);
