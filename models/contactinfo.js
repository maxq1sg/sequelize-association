"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContactInfo extends Model {
    static associate({ User }) {
      this.belongsTo(User, {
        foreignKey: "userId",
        // as: "contact_data",
      });
    }
  }
  ContactInfo.init(
    {
      country: DataTypes.STRING,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "contact_info",
      modelName: "ContactInfo",
    }
  );
  return ContactInfo;
};
