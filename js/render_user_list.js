app.renderUsers = function (users) {
  $("[name='user-list']").html(usersToHTML(users));

  function usersToHTML (users) {
    return users.map(function (user, index) {
      var li = $('<li class="user" name="user">' +
        '<span class="user-info user-name" name="first"></span> ' +
        '<span class="user-info user-name" name="last"></span>' +
        '<p class="user-info user-email" name="email"></p>' +
        '<button name="remove" class="remove-user">X</button>' +
        '</li>');

      li.data('index', index);
      li.find("[name='first']").text(user.first);
      li.find("[name='last']").text(user.last);
      li.find("[name='email']").text(user.email);

      return li;

    });
  }
};
