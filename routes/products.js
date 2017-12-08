"use strict";

const Express = require("express");
const router = Express.Router();

//access to SQL database
const models = require("../models/sequelize");
const Products = models.Product;
const Categories = models.Category;


router.get("/", async function(req, res, next) {
  try {
    let productsResults = await Products.findAll();
    let categoriesResults = await Categories.findAll();

    res.render("welcome/index", {
      products: productsResults,
      categories: categoriesResults
    });
  } catch (e) {
    res.status(500).send(e.stack);
  }
});

router.post("/products/searchbyname", async function(req, res, next) {
  try {
    let result = await Products.findAll(
      {where: {name: {$like: `%${req.body.search}%`}}}
    );
    let categoriesResults = await Categories.findAll();

    res.render("welcome/index", {
      products: result,
      categories: categoriesResults
    });
  } catch (e) {
    res.status(500).send(e.stack);
  }
})

router.post("/products/filter", async function(req, res, next) {
  try {

    let categoryId = await Cate
    let result = await Categories.findById
    let result = await Products.findAll({
      where: {
        price: {
          $lte: req.body.maxprice,
          $gte: req.body.minprice
        }
      }
    }, {
      include: [{ model: Categories }]
    })

    let categoriesResults = await Categories.findAll();

    res.render("welcome/index", {
      products: result,
      categories: categoriesResults
    });
  } catch (e) {
    res.status(500).send(e.stack);
  }
})

// router.post("/products/searchby", async function(req, res, next) {
//   try {
//     let result = await Products.findAll(
//       {where: {name: {$like: `%${req.body.search}%`}}}
//     );
//
//     res.render("welcome/index", { products: result });
//   } catch (e) {
//     res.status(500).send(e.stack);
//   }
// })

module.exports = router;
