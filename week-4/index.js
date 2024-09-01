const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());

let todos = [];

app.get("/", (req, res) => {
  res.status(202).json(todos);
});

app.post("/", (req, res) => {
  let todo = {
    id: todos.length + 1,
    title: req.body.title,
    date: req.body.date || null,
    isComplete: req.body.isComplete || false,
  };
  todos.push(todo);
  res.status(202).json(todo);
});

app.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    res.status(404).json({ error: "Todo not Found" });
  }

  todo.title = req.body.title || todo.title;
  todo.date = req.body.date || todo.date;
  todo.isComplete =
    req.body.isComplete !== undefined ? req.body.isComplete : todo.isComplete;
  res.json(todo);
});

app.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    res.status(404).json({ error: "Todo not Found" });
  }
  todos.splice(index, 1);
  res.status(202).send({ msg: "Todo Deleted Sucessfully!!" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
