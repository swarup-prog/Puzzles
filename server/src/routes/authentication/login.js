const router = require("express").Router();
const { User } = require("../../models/User");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).send({ message: "Incorrect password." });
    }

    res.status(200).send({ message: "Login Successful." });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error." });
  }
});

module.exports = router;
