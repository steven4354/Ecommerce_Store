"use strict";

let faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let users = [];
    for (let i = 0; i < 3; i++) {
      let randomUsername = faker.internet.userName();
      let randomEmail = faker.internet.email();
      let randomFname = faker.name.firstName();
      let randomLname = faker.name.lastName();
      users.push({
        username: randomUsername,
        email: randomEmail,
        fname: randomFname,
        lname: randomLname
      });
    }

    return queryInterface.bulkInsert("Users", users);
  },

  down: (queryInterface, Sequelize) => {}
};
