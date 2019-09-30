var express = require("express");
var fs = require("fs");
var resemble = require("node-resemble-js");
var router = express.Router();

router.get("/compare", function(req, res, next) {
  compareImages(res);
});

var compareImages = function(res) {
  resemble.outputSettings({
    largeImageThreshold: 0
  });
  var diff = resemble("1.png")
    .compareTo("2.png")
    .ignoreColors()
    .onComplete(function(data) {
      console.log(data);
      var png = data.getDiffImage();
      fs.writeFile("diff.png", png.data, null, function(err) {
        if (err) {
          throw "error writing file: " + err;
        }
        console.log("file written");
      });
      res.render("compare");
    });
};

module.exports = router;
