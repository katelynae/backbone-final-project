var app = app || {};

app.Song = Backbone.Model.extend({
    defaults: {
        coverImage: '../img/placeholder-cover.png',
        title: 'No title',
        artist: 'Unknown'
    }
});
