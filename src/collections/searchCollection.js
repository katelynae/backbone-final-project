var app = app || {};

app.SearchResults = Backbone.Collection.extend({
    model: app.Song,
    url: '',
    parse: function(data){
        return data.results.trackmatches.track;
    }
});


