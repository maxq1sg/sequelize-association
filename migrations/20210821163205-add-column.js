"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "fav_color", {
      type: Sequelize.DataTypes.STRING,
      defaultValue: "red",
      allowedNull: false,
      validate: {
        isIn: [["red", "green"]],
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("users", "fav_color");
  },
};
