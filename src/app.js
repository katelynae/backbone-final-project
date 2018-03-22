var app = app || {};

$(function() {
    var songs = [
        { title: 'Believer', artist: 'Imagine Dragons'},
        { title: 'Believe Me Natalie', artist: 'The Killers'},
        { title: 'Believe', artist: 'Cher'},
        { title: 'I Believe in a Thing Called Love', artist: 'The Darkness'},
        { title: 'Believe', artist: 'Mumford & Sons'},
    ];

    new app.PlaylistView(songs);
});