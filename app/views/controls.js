var Backbone = require('backbone-nested');
var _ = require('underscore');
var $ = Backbone.$;

var ControlsView = Backbone.View.extend({

  events: {
    'click #logoutRef': 'handleLogout',
    'click #loginRef': 'handleLogin',
    'click #homeRef': 'goHome',
    'click #entrepreneursListRef': 'showEntrepreneursList',
    'click #uploadExcelRef': 'handleUpload',
    'click #scheduleMeetingsRef': 'scheduleMeetings'
  },

  handleLogout: function (ev) {
// TODO
    console.log('handleLogout at: '+ev);
  },

  handleLogin: function (ev) {
// TODO
    console.log('handleLogin at: '+ev);
  },

  goHome: function (ev) {
// TODO
    console.log('goHome at: '+ev);
  },

  showEntrepreneursList: function (ev) {
//  TODO
    console.log('showEntrepreneursList at: '+ev);
  },

  handleUpload: function (ev) {
//  TODO
    console.log('handleUpload at: '+ev);
  },

  scheduleMeetings: function (ev) {
// TODO
    console.log('scheduleMeetings at: '+ev);
  },

  initialize: function (options) {
    this.proxy = options.proxy;
  }
});
module.exports = ControlsView;