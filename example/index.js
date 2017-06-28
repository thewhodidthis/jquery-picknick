$( function() {
  var timer;
  var delay = 3000;

  $( window ).on( "load", function() {
    $( "ul" ).picknick( {
      selector: "span"
    } ).on( "pick.nick", function() {
      if ( timer ) {
        clearTimeout( timer );
      }

      timer = setTimeout( function() {
        $( "ul" ).data( "picknick" ).next();
      }, delay );
    } ).delay( delay * 0.75 ).queue( function() {
        $( this ).trigger( "pick.next" );
    } );
  } );
} );
