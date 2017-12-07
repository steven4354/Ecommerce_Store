"use strict";

let faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let shippings = [];
    for (let i = 0; i < 3; i++) {
      shippings.push({
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        userId: Math.floor(Math.random() * 2) + 1 //double check this
      });
    }

    return queryInterface.bulkInsert("Shippings", shippings);
  },

  down: (queryInterface, Sequelize) => {}
};
