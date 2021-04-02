const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body.num1);
  let num1 = parseInt(req.body.num1);
  let num2 = parseInt(req.body.num2);

  let sum = num1 + num2;
  let sbt = num1 - num2;
  let mtp = num1 * num2;
  let dvd = num1 / num2;

  res.send(
    `<h1>Results</h1><p>Sum: ${sum}</p><p>Difference: ${sbt}</p><p>Product: ${mtp}</p><p>Quotient: ${dvd}</p>`
  );
});

app.listen(PORT, () => {
  console.log(
    `The server is active and listening on port http:Localhost:${PORT}`
  );
});
