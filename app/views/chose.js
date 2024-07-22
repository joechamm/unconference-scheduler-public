var Backbone = require('backbone-nested');

var ChoseView = Backbone.View.extend({
  template: '<h2>Choose a company</h2>',
  className: 'details',
  render: function () {
    this.$el.html(this.template);
    return this;
  }
});
module.exports = ChoseView;