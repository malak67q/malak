const Cart = require("../models/Cart");

const createCart = async () => {
  return await Cart.create({ items: [] });
};

const getCartById = async (id) => {
  return await Cart.findById(id).populate("items.product");
};

const addItemToCart = async (id, product, quantity) => {
  const cart = await Cart.findById(id);

  if (!cart) {
    return null;
  }

  cart.items.push({ product, quantity });

  await cart.save();

  return await Cart.findById(id).populate("items.product");
};

module.exports = {
  createCart,
  getCartById,
  addItemToCart,
};
