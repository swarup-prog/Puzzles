const router = require("express").Router();

const Blog = require("../../models/Blog");

router.post("/", async (req, res) => {
  let body = { ...req.body };

  try {
    await new Blog({ ...body }).save();
    res.status(201).send({ message: "Post Created successfully." });
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

module.exports = router;
