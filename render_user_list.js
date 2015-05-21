app.renderUsers = function (users) {
  $('user-list').html(usersToHTML(users));

  function usersToHTML (users) {
    return users.map(function (user, index) {
      var li = $('<li name="user">' +
        '<span name="first"></span>' +
        '<span name="last"></span>' +
        '<span name="email"></span>' +
        '<button name="remove">X</button>' +
        '</li>');

      li.data('index', index);
      li.find('first').text(user.text);
      li.find('last').text(user.text);
      li.find('email').text(user.text);

      return li;

    });
  }
};


console.log(app.userList);
