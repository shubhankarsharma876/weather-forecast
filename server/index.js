const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "feedback",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const feedbackdb = req.body.feedbackdb;

  db.query(
    "insert into fbtable (name,email,feedbackdb) values (?,?,?)",
    [name, email, feedbackdb],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

app.listen(5174, () => {
  console.log("Running on port 5174");
});
