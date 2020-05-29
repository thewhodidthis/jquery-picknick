## about

Simplifies rotating through collections of things such as page tabs or images.

## setup

This plugin is as old as [bower](https://bower.io) is:

```sh
bower install jquery-picknick
```

## usage

Attach to a DOM selector and call `pick()` with a numeric index to select a specific child element. Move the active class one step at a time using `prev()` or `next()` as required. All methods offer corresponding jQuery events. For example,

```js
$( ".slideshow" )
    .picknick()
    .on( "click", function() {
        $( this ).trigger( "pick.next" );
    });
```

## see also

- [@thewhodidthis/picknick](https://github.com/thewhodidthis/picknick)
