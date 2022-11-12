const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "weatherdb",
});

app.get("/", (req, res) => {
  res.send("hello world i am a server");
});

app.listen(5174, () => {
  console.log("Running on port 5174");
});
