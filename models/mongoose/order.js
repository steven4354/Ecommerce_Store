"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let OrderSchema = new Schema(
  {},
  {
    discriminatorKey: "kind"
  }
);

let Order = mongoose.model("Order", UserSchema);
module.exports = Order;
