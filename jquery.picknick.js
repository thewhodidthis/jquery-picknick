;( function( $ ) {
"use strict";

var Picknick = {
  init: function( options, target ) {
    this.options = $.extend( {}, this.options, options );

    this.idx     = 0;
    this.$host   = $( target );
    this.$tabs   = $( this.options.selector ) || $( target ).children();
    this.total   = this.$tabs.length;
    this.active  = this.options.active;

    this._build();

    return this;
  },

  options: {
    name: "picknick",
    active: "is-active",
    selector: null
  },

  _build: function() {
    this.pick( this.idx );

    if ( this.total <= 1 ) {
      return;
    }

    this
      .$host
      .on( "pick", $.proxy( function( e, target ) {
        e.stopPropagation();

        this.pick( target );
      }, this ) )
      .on( "pick.prev", $.proxy( function( e ) {
        e.stopPropagation();

        this.prev();
      }, this ) )
      .on( "pick.next", $.proxy( function( e ) {
        e.stopPropagation();

        this.next();
      }, this ) );
  },

  pick: function( target ) {
    var active = this.active;

    this
      .$tabs
      .eq( this.idx )
      .removeClass( active )
      .end()
      .eq( target )
      .addClass( active );

    this.idx = target;

    this.$host.triggerHandler( "pick.nick", target );
  },

  prev: function() {
    var target = ( this.idx === 0 ) ? this.total - 1 : this.idx - 1;

    this.pick( target );
  },

  next: function() {
    var target = ( this.idx === this.total - 1 ) ? 0 : this.idx + 1;

    this.pick( target );
  }
};

// Create a plugin based on a defined object
$.plugin = function( name, object ) {
  $.fn[ name ] = function( options ) {
    return this.each( function() {
      if ( !$.data( this, name ) ) {
        $.data( this, name, Object.create( object ).init( options, this ) );
      }
    } );
  };
};

$.plugin( "picknick", Picknick );
} )( jQuery );
