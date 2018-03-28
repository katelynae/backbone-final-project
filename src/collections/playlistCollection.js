var app = app || {};

app.Playlist = Backbone.Collection.extend({
    model: app.Song,
    url: 'http://localhost:3000/playlist',
    saveAll: function(){
    	_.each(this.models, function(model){
    		model.save();
    		console.log(model);
    	});
    }
});