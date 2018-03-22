var app = app || {};

app.SearchView = Backbone.View.extend({
    tagName: 'div',
    className: 'resultsContainer',
    template: _.template( $('#searchTemplate').html() ),
    events: {
        'click .add': 'addSong'
    },

    addSong: function(x) {
        x.preventDefault();

        var formData = {};

        $(this).siblings().each( function( i, el ) {
            if( $(el).val() != '' ){
                formData[ el.id ] = $( el ).val();
            }
        });

        this.collection.add( new app.Song(formData) );
    },
    render: function() {
        this.$el.html( this.template( this.model.toJSON() ));

        return this;
    }
});