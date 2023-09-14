const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post("/", async (req, res) => {
  const file = req.files.file;

  const { url } = await cloudinary.uploader.upload(
    file.tempFilePath,
    (err, result) => {
      if (err) throw err;
    }
  );
  res.status(200).json({ url: url });
});

module.exports = router;
