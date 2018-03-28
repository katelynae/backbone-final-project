var app = app || {};

app.Song = Backbone.Model.extend({
    defaults: {
        image: '../img/placeholder-cover.png',
        name: 'No title',
        artist: 'Unknown'
    },
    urlRoot: 'http://localhost:3000/playlist',
    initialize: function(options){
    	if( _.isArray(options.image) ){
    		this.set('image', this.get('image')[2]['#text']);
    	}
    }
});
