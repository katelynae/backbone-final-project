var app = app || {};

$(function() {

    app.playlist = new app.Playlist();

    app.playlist.fetch().then(function(){

      new app.PlaylistView(app.playlist);

    });


});