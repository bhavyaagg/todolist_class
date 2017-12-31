/**
 * Created by bhavyaagg on 31/12/17.
 */
const express = require('express');
const app = express();

const path = require('path');

const todos = [];
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/todos', function (req, res) {
  res.send(todos);
})

app.post('/todos', function (req, res) {
  todos.push({
    task: req.body.task,
    done: req.body.done
  });
  res.send({success: true});
})

app.get('/hello', function (req, res) {
  res.send("Hello")
});

app.use(express.static(path.join(__dirname, 'public_static')))

app.listen(4000, function () {
  console.log("Server listening on port 4000");
});