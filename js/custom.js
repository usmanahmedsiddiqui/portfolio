(function($) {

  'use strict';

  var $filters = $('.filters [data-filter]'),
    $boxes = $('.posts [data-item]');

  $filters.on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    
    $filters.removeClass('active');
    $this.addClass('active');

    var $filterColor = $this.attr('data-filter');

    if ($filterColor == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function() {
          $boxes.addClass('is-animated').fadeIn();
        });
    } else {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function() {
          $boxes.filter('[data-item = "' + $filterColor + '"]')
            .addClass('is-animated').fadeIn();
        });
    }
  });

})(jQuery);