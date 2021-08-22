"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ContactInfo, Order }) {
      this.hasOne(ContactInfo, {
        foreignKey: "userId",
      });
      this.hasMany(Order, {
        foreignKey: "user_id",
      });
    }
  }
  User.init(
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "no_name_provided",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};
