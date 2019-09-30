const express = require("express");

var app = express();

app.use("/", function(req, res) {
  res.send("Hola");
});

app.listen(3000);
console.log("La aplicacion esta escuchando en localhost:3000");
