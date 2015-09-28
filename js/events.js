$(function () {

  app.userList.load();
  app.userList.alphabetizeAZ();
  app.renderUsers(app.userList.all);

  $("[name='user-form']").on('submit', function (e) {
    e.preventDefault();

    var first = $("[name='first']").val();
    var last = $("[name='last']").val();
    var email = $("[name='email']").val();

    if(first === "") {
      return alert("Please enter first name.");
    }
    if(last === "") {
      return alert("Please enter last name.");
    }
    if(email === "") {
      return alert("Please enter email.");
    }
    app.userList.add(first, last, email);
    app.renderUsers(app.userList.all);

    $("[name='user-form']").trigger("reset");

  });

  $("[name='user-list']").on('click', "[name='remove']", function () {

    var li = $(this).closest("[name='user']");
    var index = li.data('index');

    app.userList.remove(index);
    app.renderUsers(app.userList.all);

  });

  $("[name='alphabetical']").change(function() {

    if($(this).find('option:selected').val() === "A-Z"){
      app.userList.alphabetizeAZ();
    }else if($(this).find('option:selected').val() === "Z-A"){
      app.userList.alphabetizeZA();
    };

    app.renderUsers(app.userList.all);

  });

  $("[name='user-search']").keyup(function() {

    var searchq = this.value;
    app.renderUsers(app.userList.search(searchq));

  })

});
