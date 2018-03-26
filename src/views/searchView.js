var app = app || {};




app.SearchView = Backbone.View.extend({
    el: '#resultsContainer',
    events: {
        'click #generate': 'generateSongs'
    },
    generateSongs: function(){
        var keyword = $('#keyword').val();
        app.searchresults = new app.SearchResults();
        app.searchresults.url = 'http://ws.audioscrobbler.com/2.0/?method=track.search&track='+keyword+'&api_key=f959d6d5a5eb763fa1d3d2b438cde9a1&format=json';
        app.searchresults.fetch();
        this.collection=app.searchresults;
        this.listenTo( this.collection, 'add', this.render );
        this.render();
        console.log(app.searchresults);
    },
    render: function(){
        this.$el.empty();
        this.collection.each(function(item) {
            this.renderSong(item);
        }, this );
    },
    renderSong: function(item) {
        var resultView = new app.ResultView({
            model: item
        });
        this.$el.append( resultView.render().el );
    }
});


app.searchview = new app.SearchView();
