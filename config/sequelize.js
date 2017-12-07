// config/sequelize.js

{
  "development": {
    "username": "username",
    "password": null,
    "database": "project_mimirs_market_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "username",
    "password": null,
    "database": "project_mimirs_market_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "POSTGRES_URL",
    "dialect": "postgres"
  }
}
