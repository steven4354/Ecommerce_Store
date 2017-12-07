"use strict";

let faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let products = [];
    for (let i = 0; i < 3; i++) {
      products.push({
        sku: faker.random.number(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.lorem.text(),
        picture: "http://lorempixel.com/640/480/technics",
        categoryId: Math.floor(Math.random() * 2) + 1 //double check
      });
    }

    return queryInterface.bulkInsert("Products", products);
  },

  down: (queryInterface, Sequelize) => {}
};
