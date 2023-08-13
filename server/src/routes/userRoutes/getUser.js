const router = require("express").Router();
const { User } = require("../../models/User");

router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findById({ _id });

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
