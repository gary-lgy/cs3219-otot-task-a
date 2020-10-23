const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const clientIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const proxyIp = req.connection.remoteAddress;
  return res.render("index", { clientIp, proxyIp });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
