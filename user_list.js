app.userList = {

  all: [],

  add: function (first, last, email) {
    this.all.push(app.createUser(first, last, email));
    this.save();
  },

  remove: function (index) {
    this.all.splice(index, 1);
    this.save();
  },

  load: function () {
    this.all = JSON.parse(localStorage.getItem('userList')) || [];
  },

  save: function () {
    localStorage.setItem('userList', JSON.stringify(this.all));
  }
};
