var Backbone = require('backbone-nested');
var $ = Backbone.$;
var _ = require('underscore');

var EntrepreneurView = require('views/entrepreneur');

var EntrepreneursList = Backbone.View.extend({

  render: function () {
    var that = this;
    this.$el.html('<div id="entrepreneurs-list"><h1 class="entrepreneurs-list">Entrepreneurs</h1><ol class="list-group"></ol></div>');

    var entrepreneursView = this.collection.map(function (entrepreneur) {
      return (new EntrepreneurView({model : entrepreneur, router : that.router})).render().el;
    });
    this.$('ol').append(entrepreneursView);
    return this;
  },

  initialize: function (options) {
    this.router = options.router;
    this.collection = options.collection;
    this.entrepreneurs = this.collection;
    this.listenTo(this.collection, 'reset', this.render);
  }
});

var instance;
EntrepreneursList.getInstance = function (options) {
  if (!instance) {
    instance = new EntrepreneursList({
      el: options.el,
      collection: options.collection,
      router: options.router
    });
  }
  return instance;
};

module.exports = EntrepreneursList;

  