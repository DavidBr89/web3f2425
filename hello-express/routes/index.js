const express = require("express");
const loggerMiddleware = require("../middlewares/logger_middleware");
const router = express.Router();

/* GET home page. */
router.get("/", [loggerMiddleware, authMiddleware], function (req, res) {
  const test = {
    id: 1,
    name: "Web 3",
  };

  res.status(201).json(test);
});

router.post("/", (req, res) => {
  const data = req.body;

  console.log(data);

  res.sendStatus(201);
});

router.delete("/", (req, res) => {
  res.sendStatus(204);
});

module.exports = router;
