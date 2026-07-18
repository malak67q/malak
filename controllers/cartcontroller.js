const cartService = require("../services/cartService");

// إنشاء Cart
const createCart = async (req, res) => {
  try {
    const cart = await cartService.createCart();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// عرض Cart
const getCart = async (req, res) => {
  try {
    const cart = await cartService.getCartById(req.params.id);

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

    const cart = await cartService.addItemToCart(
      req.params.id,
      product,
      quantity
    );

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

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
