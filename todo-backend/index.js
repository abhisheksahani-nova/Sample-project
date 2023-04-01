const express = require("express");
const app = express();
const Members = require("./Members");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || "8000";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send(
    "<h1>Server intialized, ready to take request from <i>Master</i> </h1>"
  );
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
