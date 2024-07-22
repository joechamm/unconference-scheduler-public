var Backbone = require('backbone-nested');
var _ = require('underscore');

var Entrepreneur = require('models/entrepreneur');
var Entrepreneurs = require('collections/entrepreneurs');
var entrepreneurs = new Entrepreneurs();
var deferred = entrepreneurs.fetch();

//var data = require('/home/joechamm/workspace/unconference-scheduler/data/simpsons_entrepreneurs.json');
//var entrepreneursData = data.entrepreneurs;

//var entrepreneurs = new Entrepreneurs(entrepreneursData);

var Layout = require('views/layout');

var EntrepreneursRouter = Backbone.Router.extend({
  routes: {
    'entrepreneurs/:id': 'selectEntrepreneur',
    'schedules/:id': 'showSchedule',
    '':               'showMain'
  },

  showSchedule: function (id) {
    var entrepreneur = new Entrepreneur({_id: id});
    this.listenTo(entrepreneur, 'all', function (ev) { console.log(ev) });
    entrepreneur.fetch();
  },

  selectEntrepreneur: function (id) {
    var that = this;
    deferred.done(function () {
      entrepreneurs.resetSelected();
      entrepreneurs.selectByID(id);
      that.layout.setDetails(that.entrepreneurs.get(id));
    });
  },

  showMain: function () {
    this.entrepreneurs.resetSelected();
    this.layout.setChose();
  },

  initialize: function (options) {
    this.entrepreneurs = entrepreneurs;
    this.listenTo(this.entrepreneurs, 'all', function (ev) { console.log(ev) });
    this.layout = Layout.getInstance({
      el: '#main',
      router: this
    });
    var that = this;
    deferred.done(function (results) {
      that.entrepreneurs.reset(results);
      that.layout.render();
    });
  }
});
module.exports = EntrepreneursRouter;

