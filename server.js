const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
