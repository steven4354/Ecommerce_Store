"use strict";
module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      fname: DataTypes.STRING,
      lname: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );

  User.associate = function(models) {
    User.hasMany(models.Shipping, {
      foreignKey: "userId"
    });
  };

  return User;
};
