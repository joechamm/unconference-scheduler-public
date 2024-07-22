var Backbone = require('backbone-nested');

var meeting_times = ['9:00AM','9:40AM','10:20AM','11:00AM','12:40PM','1:20PM','2:00PM','2:40PM','3:20PM','4:00PM'];

var Entrepreneur = Backbone.NestedModel.extend({
	idAttribute: '_id',

  urlRoot: '/api/entrepreneurs',

	defaults: {
		name: '{entrepreneur}',
		type: 'entrepreneur',
		index: -1,
		selected: false,
		meetings: [
		  {time: '9:00AM', company: 'open', location: 'UNKNOWN'},
		  {time: '9:40AM', company: 'open', location: 'UNKNOWN'},
		  {time: '10:20AM', company: 'open', location: 'UNKNOWN'},
		  {time: '11:00AM', company: 'open', location: 'UNKNOWN'},
		  {time: '12:40PM', company: 'open', location: 'UNKNOWN'},
		  {time: '1:20PM', company: 'open', location: 'UNKNOWN'},
		  {time: '2:00PM', company: 'open', location: 'UNKNOWN'},
		  {time: '2:40PM', company: 'open', location: 'UNKNOWN'},
		  {time: '3:20PM', company: 'open', location: 'UNKNOWN'},
		  {time: '4:00PM', company: 'open', location: 'UNKNOWN'}
		  ]
	}
});

module.exports = Entrepreneur;
