var app = app || {};

app.SongView = Backbone.View.extend({
    tagName: 'div',
    className: 'songContainer',
    template: _.template( $('#songTemplate').html() ),
    events: {
        'click .delete': 'deleteSong'
    },

    deleteSong: function() {
        this.model.destroy();

        this.remove();
    },
    render: function() {
        this.$el.html( this.template( this.model.toJSON() ));

        return this;
    }
});