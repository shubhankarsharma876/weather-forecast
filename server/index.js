const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "",
});

app.get("/", (req, res) => {
  
});

app.listen(5174, () => {
  console.log("Running on port 5174");
});
