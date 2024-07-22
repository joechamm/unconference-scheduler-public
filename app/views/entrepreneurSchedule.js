var Backbone = require('backbone-nested');
var _ = require('underscore');
var $ = require('jquery-untouched');
Backbone.$ = $;

var Handlebars = require('handlebars');
var Templates = require('templates/compiledTemplates')(Handlebars);

var Entrepreneur = require('models/entrepreneur');

var EntrepreneurScheduleView = Backbone.View.extend({
  el: '#entrepreneur-schedule',
	tagName: 'section',
	className: 'entrepreneur',
	template: Templates['entrepreneur_schedules'],

	render: function () {
	 this.$el.html(this.template(this.model.toJSON()));
	 return this;
  },

  initialize: function () {
    this.listenTo(this.model, 'change:selected', this.render);
  }
});
module.exports = EntrepreneurScheduleView;
