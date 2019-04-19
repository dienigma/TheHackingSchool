var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("crypter");
});

router.post("/", function(req, res, next) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(req.body.ipstring, salt, function(err, hash) {
      // Store hash in your password DB.
      if (err) {
        res.send(err);
      } else {
        res.json(hash);
      }
    });
  });
});

module.exports = router;
