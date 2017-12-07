var path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "/.env")
});

console.log(path.join(__dirname, "/.env"));
console.log(process.env.POSTGRES_USERNAME);
console.log(process.env.POSTGRES_PASSWORD);

module.exports = {
  development: {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: "project_mimirs_market_development",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: "project_mimirs_market_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: "project_mimirs_market_production",
    host: "127.0.0.1",
    dialect: "postgres"
  }
};
