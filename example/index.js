$(function() {
  var timer;
  var delay = 3000;

  if (window !== window.top) {
    $('html').addClass('is-iframe');
  }

  $(window).on('load', function() {
    $('html').removeClass('no-js');

    $('ul').picknick({
      selector: 'a',
      active: 'is-active'
    }).on('pick.nick.d', function (e) {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(function() {
        $('ul').data('picknick').next();
      }, delay);
    }).delay(delay * 0.75).queue(function() {
        $(this).trigger('pick.next');
    });
  });
});
