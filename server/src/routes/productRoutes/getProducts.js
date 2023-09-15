const router = require("express").Router();
const { Product } = require("../../models/Product");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(200).json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
