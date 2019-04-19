var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("crypter");
});

router.post("/", (req, res) => {
  var result = bcrypt.hashSync(req.body.ipstring, salt);
  res.render("result", { result: result });
});

module.exports = router;
