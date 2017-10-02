## jQuery picknick
> Tabs made simple

### Setup
```sh
bower install jquery-picknick
```

### Usage
```js
$( ".slideshow" )
    .picknick()
    .on( "click", function() {
        $( this ).trigger( "pick.next" );
    });
```
