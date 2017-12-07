"use strict";
module.exports = (sequelize, DataTypes) => {
  var Shipping = sequelize.define(
    "Shipping",
    {
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip: DataTypes.INTEGER,
      userId: DataTypes.INTEGER //double check this
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );

  Shipping.associate = function(models) {
    Shipping.belongsTo(models.User, {
      foreignKey: "userId"
    });
  };

  return Shipping;
};
