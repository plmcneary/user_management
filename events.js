$(function () {

  app.userList.load();
  app.renderUsers(app.userList.all);

  $("[name='user-form']").on('submit', function (e) {
    e.preventDefault();

    var first = $("[name='first']");
    var last = $("[name='last']");
    var email = $("[name='email']");

    app.userList.add(first.val(), last.val(), email.val());
    app.renderUsers(app.userList.all);

    $("[name='user-form']").trigger("reset");

  });

  $("[name='user-list']").on('click', "[name='remove']", function () {

    var li = $(this).closest("[name='user']");
    var index = li.data('index');

    app.userList.remove(index);
    app.renderUsers(app.userList.all);

  });

});
