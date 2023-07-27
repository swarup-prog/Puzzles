const express = require("express");

const app = express();

const data = [
  {
    id: 1,
    name: "XYZ",
    position: "ABC",
  },
  {
    id: 2,
    name: "XYZ",
    position: "ABC",
  },
  {
    id: 3,
    name: "XYZ",
    position: "ABC",
  },
  {
    id: 4,
    name: "XYZ",
    position: "ABC",
  },
];

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
