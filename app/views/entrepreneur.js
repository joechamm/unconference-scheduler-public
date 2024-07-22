var Backbone = require('backbone-nested');
var _ = require('underscore');
var $ = require('jquery-untouched');
Backbone.$ = $;

var Entrepreneur = require('models/entrepreneur');

var EntrepreneurView = Backbone.View.extend({
	tagName: 'li',
	className: 'list-group-item',
	template: '<h3><a href="/entrepreneurs/<%= _id %>"><%= name %></h3>',

	events: {
	  'click': 'selectEntrepreneur'
	},

	selectEntrepreneur: function(ev) {
	  ev.preventDefault();
    var modelId = this.model.get('_id');
	  console.log('event on '+modelId);
	  this.model.set('selected',true);
	  this.router.navigate("/entrepreneurs/" + modelId, {trigger: true});
/*
	  if (!this.model.get('selected')) {
      this.router.navigate("/entrepreneurs/" + this.model._id, {trigger: true});
	  }
	  */
	},

	render: function () {
	 var tmpl = _.template(this.template);
	 this.$el.html(tmpl(this.model.toJSON()));
	 this.$el.toggleClass('selected', this.model.get('selected'));
	 return this;
  },

  initialize: function (options) {
    this.listenTo(this.model, 'change:name', this.render);
    this.listenTo(this.model, 'change:selected', this.render);
    this.router = options.router;
  }
});
module.exports = EntrepreneurView;