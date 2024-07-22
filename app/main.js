var Backbone = require('backbone-nested');
var $ = require('jquery-untouched');
Backbone.$ = $;

var EntrepreneursRouter = require('routers/entrepreneurs');

$(document).ready(function () {
  console.log('init');
  var router = new EntrepreneursRouter({el: $('#main') });
  Backbone.history.start({
    pushState: true,
    root: '/'
  });
});
