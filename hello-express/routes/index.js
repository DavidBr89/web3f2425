const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  const test = {
    id: 1,
    name: "Web 3",
  };

  res.json(test);
});

module.exports = router;
