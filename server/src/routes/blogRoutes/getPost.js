const router = require("express").Router();
const Blog = require("../../models/Blog");

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();

    return res.status(200).json(blogs);
  } catch (error) {
    console.error("Error retrieving blogs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
