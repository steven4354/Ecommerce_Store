"use strict";

const Express = require("express");
const router = Express.Router();
const models = require("../models/sequelize");
const Products = models.Products;

router.get("/", async function(req, res, next) {
  try {
    result = await Products.findAll();
    res.render("welcome/index", { products: result });
  } catch (e) {
    res.status(500).send(e.stack);
  }
});

//router.post;

module.exports = router;
