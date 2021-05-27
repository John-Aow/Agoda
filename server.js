const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const gcd_api = require("./gcd_api");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get("/", (request, response) => {
  response.send("Hello World!");
});
app.post("/", gcd_api.gcd_api);
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
