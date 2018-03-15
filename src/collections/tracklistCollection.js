


var TrackList = Backbone.Collection.extend({
	method: 'POST',
	url: "https://api.spotify.com/v1/search?q=hello&type=track&limit=15",
	data: {
		grant_type: 'client_credentials'

	},
	headers: {
		"Authorization": "Basic aa1a0f8993a741ce9de04521eee16149:716bc61dd08e453c99e5da8fe0812b02"
	},
	initialize: function(){
		this.fetch();
	}
});

var tracklist = new TrackList();

console.log(tracklist);