var Backbone = require('backbone-nested');
var User = require('models/user');
var $ = require('jquery-untouched');
var _ = require('underscore');

var Session = Backbone.Model.extend({
  isValid: function (callback) {

  },

  login: function (username, password) {
    var that = this;
    var credentials = JSON.stringify({username: username, password: password});
    $.ajax({type: "POST", dataType: "json",
      contentType: "application/json",
      url: "/api/auth/session",
      data: credentials})
    .done(function (data) {
      that.user = new User(data);
      that.trigger('login:success');
    })
    .fail(function (response) {
      var error = JSON.parse(response.responseText).error;
      console.log(error);
      that.validationError = {"username": error};
      that.trigger('invalid', that);
    });
  },

  currentUser: function () {
    console.log('currentUser: ', this.user);
    if (this.user && (this.user.get('auth') === 'OK')) {
      return this.user;
    } else {
      return false;
    }
  },

  logout: function () {
    var that = this;
    $.ajax({type: 'DELETE', dataType: 'json',
        contentType: 'application/json',
        url: '/api/auth/session' })
      .done(function (data) {
        that.user.set('auth', 'NOK');
        that.trigger('logout:success');
      })
      .fail();
    }
});

var session;
Session.getInstance = function () {
  if (!session) {
    session = new Session();
  }

  return session;
};
module.exports = Session;