var Backbone = require('backbone-nested');
var Entrepreneur = require('models/entrepreneur');
var _ = require('underscore');

var Entrepreneurs = Backbone.Collection.extend({
  model: Entrepreneur,

  url: '/api/entrepreneurs',

  getSelected: function () {
    return this.pluck('selected').indexOf(true);
  },

  resetSelected: function () {
    this.each( function (model) {
      model.set({"selected": false});
    });
  },

  selectByID: function (id) {
    var entrepreneur = this.get(id);
    entrepreneur.set({"selected": true});
    return entrepreneur.id;
  }
});
module.exports = Entrepreneurs;