
var TrackList = Backbone.Collection.extend({
	model: Song,
	url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=f959d6d5a5eb763fa1d3d2b438cde9a1&format=json',
	initialize: function(options) {
		this.fetch();
	},
	parse: function(response){
		return response.track;
	}
});

var tracklist = new TrackList({});

console.log(tracklist.create());