var app = app || {};

$(function() {

    app.playlist = new app.Playlist();

    new app.PlaylistView(app.playlist);
});