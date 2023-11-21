const user = require("./users/user");
const cart = require("./carts/cart");
const category = require("./categories/categ");
const product = require("./products/product");
const Sequelize = require("../dbconnection/db");

user.hasMany(cart, { onDelete: "CASCADE" });
cart.belongsTo(user, { onDelete: "CASCADE" });

category.hasMany(product, { onDelete: "CASCADE" });
product.belongsTo(category, { onDelete: "CASCADE" });

product.belongsToMany(cart, {
  onDelete: "CASCADE",
  through: "Product_cart", // This will Juanction Table Name
  foreignKey: {
    name: "ProductID", //
    allowNull: false,
    unique: true,
  },
});
cart.belongsToMany(product, {
  onDelete: "CASCADE",
  through: "Product_cart", // This will Juanction Table Name
  foreignKey: {
    name: "ProductID", //
    allowNull: false,
    unique: true,
  },
});

const model = Sequelize.models;

module.exports = { model, Sequelize };
