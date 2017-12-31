/**
 * Created by bhavyaagg on 31/12/17.
 */
var refreshTodos;

function getTodos(cb) {
  $.get('/todos/', function (todos) {
    cb(todos);
  })
}

function postTodos(task, cb) {
  $.post('/todos', {
    task: task
  }, function (data) {
    if (data.success) {
      cb(data.todos)
    }
  })
}

function updateTodo(taskId, cb) {
  $.post('/todos/' + taskId, function () {
    if (data.success) {
      getTodos(cb)
    }
  })
}

function setDone(e, cb) {
  console.log(e)
  const $parent = $(e).parent().parent()
  updateTodo($parent.attr('todoId'), cb)
  /*if ($(e).prop('checked')) {
    $parent.css('text-decoration', 'line-through').addClass('text-danger');
  } else {
    $parent.css('text-decoration', 'none').removeClass('text-danger');
  }*/
}

$(document).ready(function () {

  const $addNewTodo = $('#addNewTodo')
  const $addTodoBtn = $('#addTodoBtn')
  const $list = $('#list')

  $addTodoBtn.click(function () {
    postTodos($addNewTodo.val(), refreshTodos)
  });

  refreshTodos = function (todos) {
    $list.empty();
    let str = "";

    for (let i = 0; i < todos.length; i++) {
      str += `
      <li class="list-group-item">
        <div class="row" todoId=${i}>
          <div class="col-10">
            ${todos[i].task}
          </div>
          <div class="col-1 input-group">`

      if (todos[i].done) {
        str += `<input class="form-control" onchange="setDone(this, refreshTodos)" checked type="checkbox">`
      } else {
        str += `<input class="form-control" onchange="setDone(this, refreshTodos)" type="checkbox">`
      }

      str += `</div>
          <div class="col-1">
            <i class="fa fa-trash"></i>
          </div>
        </div>
      </li>
      `
    }
    $list.append(str);
  }

  getTodos(refreshTodos);
});



