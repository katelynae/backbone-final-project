var app = app || {};

app.Playlist = Backbone.Collection.extend({
    model: app.Song
});