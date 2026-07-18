const Cart = require("../models/Cart");

// إنشاء Cart جديد
const createCart = async (req, res) => {
  try {
    const cart = await Cart.create({ items: [] });
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// عرض Cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id).populate("items.product");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// إضافة منتج للكارت
const addItemToCart = async (req, res) => {
  try {
    const { product, quantity } = req.body;

    const cart = await Cart.findById(req.params.id);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items.push({ product, quantity });

    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCart,
  getCart,
  addItemToCart,
};
