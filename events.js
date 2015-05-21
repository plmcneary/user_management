$(function () {

  app.renderUsers(app.userList.all);

  $('submit').on('click', function () {

    var first = $('first');
    var last = $('last');
    var email = $('email');

    console.log(first.val());

    app.userList.add(first.val(), last.val(), email.val());
    app.renderUsers(app.userList.all);
  });
});
