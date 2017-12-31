/**
 * Created by bhavyaagg on 31/12/17.
 */
const express = require('express');
const app = express();

const path = require('path');

app.get('/hello', function (req, res, next) {
  res.send("Hello")
});

app.use(express.static(path.join(__dirname, 'public_static')))

app.listen(4000, function () {
  console.log("Server listening on port 4000");
});