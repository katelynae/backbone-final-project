var app = app || {};

app.Song = Backbone.Model.extend({
    defaults: {
        coverImage: '../img/placeholder-cover.png',
        name: 'No title',
        artist: 'Unknown'
    }
});
