var app = app || {};

app.searchresults = new app.SearchResults();
app.searchresults.fetch();

app.SearchView = Backbone.View.extend({
    el: '#resultsContainer',
    initialize: function(){
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