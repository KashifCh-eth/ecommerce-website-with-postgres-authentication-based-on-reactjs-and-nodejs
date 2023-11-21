const { DataTypes } = require("sequelize");
const Sequelize = require("../../dbconnection/db");
const product = Sequelize.define(
  "product",
  {
    ProductId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ProductDes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ProductPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = product;
