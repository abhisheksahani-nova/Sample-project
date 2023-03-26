const express = require("express");
const app = express();

const PORT = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(PORT, () => console.log(`Server is running at PORT:${PORT}`));
