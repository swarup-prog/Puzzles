const router = require("express").Router();
const { Product, validate } = require("../../models/Product");

router.post("/", async (req, res) => {
  let body = { ...req.body };

  try {
    const { error } = validate(body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const imageUrl = await cloudinary.uploader.upload(body.image);

    await new Product({ ...body, image: imageUrl }).save();
    res.status(201).send({ message: "Product added successfully." });
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

module.exports = router;
