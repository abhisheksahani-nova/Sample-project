const express = require("express");
const app = express();
const Members = require("./Members");

const PORT = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Get all members

app.get("/todos", (req, res) => {
  res.json(Members);
});

//Get members based on id

app.get("/todos/:id", (req, res) => {
  console.log(req.params.id, typeof req.params.id, "dhsh");
  res.json(Members.filter((member) => member.id === req.params.id));
});

//Delete todo based on id

app.delete("/:id", (req, res) => {
  res.json(Members.filter((member) => member.id !== req.params.id));
});

app.listen(PORT, () => console.log(`Server is running at PORT:${PORT}`));
