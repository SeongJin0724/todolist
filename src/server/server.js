const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const db = require("./config/db");
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, "/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.post("/api/todos", (req, res) => {
  let todo = { content: req.body.content, completed: req.body.completed };
  let sql = "INSERT INTO todos SET ?";
  db.query(sql, todo, (err, result) => {
    if (err) throw err;
    res.send({ message: "Todo added", id: result.insertId });
  });
});

app.get("/api/todolist", (req, res) => {
  db.query("select * from todos", (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});
