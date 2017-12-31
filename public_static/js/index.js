/**
 * Created by bhavyaagg on 31/12/17.
 */

function getTodos(cb) {
  $.get('/todos/', function (todos) {
    cb(todos);
  })
}

function postTodos(cb) {
  $.post('/todos', function (data) {
    if (data.success) {
      cb(todos)
    }
  })
}


$(document).ready(function () {


})