const express = require("express");

const router = express.Router();

const {
  createCart,
  getCart,
  addItemToCart,
} = require("../controllers/cartController");

router.post("/", createCart);

router.get("/:id", getCart);

router.post("/:id/items", addItemToCart);

module.exports = router;
