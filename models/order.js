"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ Product, User }) {
      this.belongsToMany(Product, {
        foreignKey: "order_id",
        through: "products_in_orders",
      });
      this.belongsTo(User, { foreignKey: "user_id" });
    }
  }
  Order.init(
    {
      payment_method: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "card",
        validate: {
          isIn: [["card", "cash", "paypal"]],
        },
      },
      is_paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "orders",
      modelName: "Order",
    }
  );
  return Order;
};
