const https = require("https");
const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  res.send("Hello HTTPS!");
});

https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert")
    },
    app
  )
  .listen(5000, () => {
    console.log("Listening...");
  });
