## jQuery picknick
> Tabs made simple

### Setup
```sh
bower install jquery-picknick
```

### Usage
```js
$('.slideshow').picknick().on('click', function(e) {
  $(this).trigger('pick.next');
});
```

### Example
```js
# Symlink freshly built standalone module into example folder
# Start a php server on port 8000
npm run example

# Open using default browser
open http://localhost:8000
```
