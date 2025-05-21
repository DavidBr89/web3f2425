const express = require("express");
const UsersController = require("../controllers/users_controller");
const router = express.Router();

/* GET users listing. */
router.get("/", UsersController.getAll);
router.post("/", UsersController.create);

module.exports = router;
