"use strict";
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define(
    "Product",
    {
      sku: DataTypes.INTEGER,
      name: DataTypes.STRING,
      price: DataTypes.NUMBER,
      description: DataTypes.STRING,
      picture: DataTypes.STRING,
      categoryId: DataTypes.INTEGER //double check
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );

  Product.associate = function(models) {
    Product.belongsTo(models.Category, {
      foreignKey: "categoryId"
    });
  };

  return Product;
};
