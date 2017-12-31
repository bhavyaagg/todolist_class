/**
 * Created by bhavyaagg on 31/12/17.
 */

$(document).ready(function () {
  setTimeout(function () {
    $.get('/hello').done(function (data) {
      console.log(data);
    }).fail(function (err) {
      console.log(err)
    })
  },2000)
})