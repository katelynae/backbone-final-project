var app = app || {};

app.ResultView = Backbone.View.extend({
    tagName: 'div',
    className: 'resultContainer',
    template: _.template( $('#searchTemplate').html() ),
	events:{
	    'click .add':'addSong'
	},
	addSong: function(x) {
	    x.preventDefault();
	    app.playlist.add( this.model );
	},
    initialize: function() {       
        this.listenTo( this.collection, 'add', this.renderSong );
        this.render();
    },
    render: function() {
        this.$el.html( this.template( this.model.toJSON() ));

        return this;
    },
    renderSong: function(item) {
        var songView = new app.SongView({
            model: item
        });
        this.$el.append( songView.render().el );
    }
});