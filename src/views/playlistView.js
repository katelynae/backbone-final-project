
var app = app || {};

app.PlaylistView = Backbone.View.extend({
    el: '#songs',
    events: {
        'click #save': 'saveSongs'
    },
	initialize: function(initialSongs) {
        this.collection = initialSongs;
        this.listenTo( this.collection, 'add', this.renderSong );
        this.render();
    },
    render: function() {
        this.collection.each(function(item) {
            this.renderSong(item);
        }, this );
    },

    renderSong: function(item) {
        var songView = new app.SongView({
            model: item
        });
        this.$el.append( songView.render().el );
    },
    saveSongs: function(){
        this.collection.saveAll();
    }
});