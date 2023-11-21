var express = require("express");
var router = express.Router();
const { createUser, fatchUser } = require("../controller/userController");

/* GET users listing. */
router.post("/createuser", createUser);
router.post("/fatchuser", fatchUser);

module.exports = router;
