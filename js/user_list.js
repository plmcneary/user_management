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
      var aLast = a.last.toLowerCase(), bLast = b.last.toLowerCase();
      var aFirst = a.first.toLowerCase(), bFirst = b.first.toLowerCase();
      var aEmail = a.email.toLowerCase(), bEmail = b.email.toLowerCase();
      if (aLast > bLast) {
        return 1;
      }
      if (aLast < bLast) {
        return -1;
      }
      if (aFirst > bFirst) {
        return 1;
      }
      if (aFirst < bFirst) {
        return -1
      }
      if (aEmail > bEmail) {
        return 1;
      }
      if (aEmail < bEmail) {
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

  search: function(searchq) {
    var searchRes = this.all.filter(function(a) {
      var userString = a.first+a.last+a.email;
      if(userString.indexOf(searchq) === -1) {
        return false;
      } else {
        return true;
      }
    });
    return searchRes;
  },

  load: function () {
    this.all = JSON.parse(localStorage.getItem('userList')) || [];
  },

  save: function () {
    localStorage.setItem('userList', JSON.stringify(this.all));
  }
};
