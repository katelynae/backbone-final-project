
var app = app || {};

app.PlaylistView = Backbone.View.extend({
    el: '#songs',
	events:{
	    'click #add':'addSong'
	},

	addSong: function(x) {
	    x.preventDefault();

	    var formData = {};

	    $( '#addSong div' ).children('input').each( function( i, el ) {
	        if( $( el ).val() != '' ){
	            formData[ el.id ] = $( el ).val();
	        }
	    });

	    this.collection.add( new app.Song(formData) );
	},
    initialize: function(initialSongs) {
        this.collection = new app.Playlist(initialSongs);
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
    }
});