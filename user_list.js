app.userList = {

  all: [],

  add: function (first, last, email) {
    this.all.push(app.createUser(first, last, email));
  },

  remove: function (index) {
    this.all.splice(index, 1);
  },

  load: function () {

  },

  save: function () {

  }
};
