const express = require("express");
const app = express();

app.all("/contact", (req, res) => {
  console.log("Just got a request!");
  res.send({ msg: "hello" });
});
app.listen(process.env.PORT || 3000);