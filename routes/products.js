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
      {where: {name: {$iLike: `%${req.body.search}%`}}}
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

    let categoryObj = await Categories.findAll({
      where: {
        name: {$iLike: `%${req.body.categories}%`}
      }
    })

    let categoryObjId = parseInt(categoryObj[0].id)

    console.log('categoryObjId: ' + categoryObjId);

    let result = await Products.findAll({
      where: {
        $and: [
          {
            price: {
              $lte: req.body.maxprice,
              $gte: req.body.minprice
          }},
          { categoryId: categoryObjId }
        ]
      }
    })

    //setup mongoose and use the repl on this 

    res.render("welcome/index", {
      products: result,
      categories: categoriesResults
    });
  } catch (e) {
    res.status(500).send(e.stack);
  }
})

module.exports = router;
