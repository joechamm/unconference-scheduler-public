var Backbone = require('backbone-nested');
var _ = require('underscore');
var $ = Backbone.$;
var Handlebars = require('handlebars');
var Templates = require('templates/compiledTemplates')(Handlebars);

var LoginView = require('views/login');
var Session = require('models/session');

var NavbarView = Backbone.View.extend({
  template: Templates['navbar'],

  render: function () {
    var session = this.session.currentUser();
    this.$el.html(this.template({session: session}));
    if (session) {
      this.$el.delegate('.logout', 'click', this.logout);
    } else {
      this.$el.delegate('.login', 'click', this.login);
    }
    return this;
  },

  login: function (ev) {
    ev.preventDefault();
    $('#login-container').toggleClass('hidden', false);
    this.loginView.render();
  },

  logout: function (ev) {
    ev.preventDefault();
    this.session.logout();
    this.loginView.render();
    $('#login-container').toggleClass('hidden', true);
  },

  initialize: function () {
    _.bindAll(this, 'render', 'login', 'logout');
    this.loginView = new LoginView();
    this.session = Session.getInstance();
    this.listenTo(this.session, 'all', function (ev) { console.log(ev) });
    this.listenTo(this.session, 'login:success', this.render);
    this.listenTo(this.session, 'logout:success', this.render);
  }
});
module.exports = NavbarView;