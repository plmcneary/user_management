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

  alphabetizeAZ: function() {
    this.all.sort(function(a, b){
      if (a.last > b.last) {
        return 1;
      }
      if (a.last < b.last) {
        return -1;
      }
      if (a.first > b.first) {
        return 1;
      }
      if (a.first < b.first) {
        return -1
      }
      if (a.email > b.email) {
        return 1;
      }
      if (a.email < b.email) {
        return -1;
      }
      return 0;
    });
    this.save();
  },

  alphabetizeZA: function() {
    this.alphabetizeAZ();
    this.all.reverse();
    this.save();
  },

  load: function () {
    this.all = JSON.parse(localStorage.getItem('userList')) || [];
  },

  save: function () {
    localStorage.setItem('userList', JSON.stringify(this.all));
  }
};
