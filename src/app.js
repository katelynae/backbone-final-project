var app = app || {};

$(function() {
    var songs = [
        { name: 'Believer', artist: 'Imagine Dragons'},
        { name: 'Believe Me Natalie', artist: 'The Killers'},
        { name: 'Believe', artist: 'Cher'},
        { name: 'I Believe in a Thing Called Love', artist: 'The Darkness'},
        { name: 'Believe', artist: 'Mumford & Sons'},
    ];

    app.playlist = new app.Playlist();

    new app.PlaylistView(app.playlist);
});