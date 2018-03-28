var app = app || {};

app.Playlist = Backbone.Collection.extend({
    model: app.Song,
    url: 'https://localhost:3000/playlist',
    saveAll: function(){
    	_.each(this.models, function(model){
    		model.save();
    		console.log(model);
    	});
    }
});