"use strict";

let mongoose = require("mongoose");
let bluebird = require("bluebird");

// Set bluebird as the promise
// library for mongoose
mongoose.Promise = bluebird;

let models = {};

// Load models and attach to models here
models.Order = require("./order");

module.exports = models;
