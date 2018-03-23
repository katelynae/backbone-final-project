var app = app || {};

app.SearchResults = Backbone.Collection.extend({
    model: app.Song,
    url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=f959d6d5a5eb763fa1d3d2b438cde9a1&format=json',
    parse: function(data){
        return data.results.trackmatches.track;
    }
});


