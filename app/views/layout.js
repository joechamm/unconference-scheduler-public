var Backbone = require('backbone-nested');
Backbone.Obscura = require('backbone.obscura');

var _ = require('underscore');

var $ = Backbone.$;

var Handlebars = require('handlebars');
var Templates = require('templates/compiledTemplates')(Handlebars);

var EntrepreneurScheduleView = require('views/entrepreneurSchedule');
var EntrepreneursList = require('views/entrepreneursList');
var ChoseView = require('views/chose');
var Controls = require('views/controls');
var Navbar = require('views/navbar');

var Layout = Backbone.View.extend({
  template: Templates['layout'],

  render: function () {
    this.$el.html(this.template());

    if (this.viewType === 'overview') {
      this.currentDetails.remove();
      this.overview.setElement(this.$('#overview')).render();
    } else {
      this.overview.remove();
      this.currentDetails.setElement(this.$('#entrepreneur-schedule')).render();
    }

//    this.controls.setElement(this.$('#controls')).render();
    this.navbar.setElement(this.$('#navbar')).render();

    return this;
  },

  setDetails: function (company) {
    var that = this;
    this.viewType = 'details';
    if (this.currentDetails) {
      this.currentDetails.remove();
    }

    company.set('selected',true);
    this.currentDetails = new EntrepreneurScheduleView({model : company, router : that.router});

    this.render();
  },

  setChose: function () {
    if (this.currentDetails) {
      this.currentDetails.remove();
    }
    this.currentDetails = new ChoseView();
    this.render();
  },

  showMain: function () {
    this.viewType = 'overview';
    if (!this.overview) {
      this.overview.remove();
    }
    this.overview = EntrepreneursList.getInstance({
      el: '#overview',
      collection: this.proxy,
      router: this.router
    });
    this.render();
  },

  initialize: function (options) {
    this.proxy = new Backbone.Obscura(options.router.entrepreneurs);
    this.proxy.setPerPage(4);
    this.router = options.router;
    this.viewType = 'overview';
//    this.collection = options.collection;
//    this.entrepreneurs = this.collection;
    this.overview = EntrepreneursList.getInstance({
      el: '#overview',
      collection: this.proxy,
      router: options.router
    });
    this.controls = new Controls({proxy: this.proxy});
    this.navbar = new Navbar();
  }
});

var instance;
Layout.getInstance = function (options) {
  if (!instance) {
    instance = new Layout({
      el: options.el,
      router: options.router,
      collection: options.router.collection
    });
  }
  return instance;
};
module.exports = Layout;