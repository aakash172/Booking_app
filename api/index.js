const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.json("test ok");
});
const port=4000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
