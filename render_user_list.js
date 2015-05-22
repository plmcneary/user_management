app.renderUsers = function (users) {
  $("[name='user-list']").html(usersToHTML(users));

  function usersToHTML (users) {
    return users.map(function (user, index) {
      var li = $('<li class="user" name="user">' +
        '<span class="user-info" name="first"></span> ' +
        '<span class="user-info" name="last"></span> ' +
        '<span class="user-info" name="email"></span>' +
        '<button name="remove">X</button>' +
        '</li>');

      li.data('index', index);
      li.find("[name='first']").text(user.first);
      li.find("[name='last']").text(user.last);
      li.find("[name='email']").text(user.email);

      return li;

    });
  }
};
