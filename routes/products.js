"use strict";

const Express = require("express");
const router = Express.Router();
const models = require("../models/sequelize");
const Products = models.Product;

router.get("/", async function(req, res, next) {
  try {
    let result = await Products.findAll();
    res.render("welcome/index", { products: result });
  } catch (e) {
    res.status(500).send(e.stack);
  }
});

//router.post;

module.exports = router;
