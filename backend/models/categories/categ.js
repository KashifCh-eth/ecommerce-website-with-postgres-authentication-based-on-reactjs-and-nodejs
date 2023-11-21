const { DataTypes } = require("sequelize");
const Sequelize = require("../../dbconnection/db");
const category = Sequelize.define(
  "category",
  {
    categoryId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = category;
