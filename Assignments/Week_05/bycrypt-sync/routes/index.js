var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("crypter");
});

module.exports = router;
