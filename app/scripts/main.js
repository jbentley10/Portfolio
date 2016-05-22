$(document).on('click', '.explore-text', function() {
  $('html, body').animate({
        scrollTop: $("#explore").offset().top
    }, 2000);
});

$(document).ready(checkIfInView);

//Cache reference to window and animation items
var $animationElement = $('.animation-element');
var $window = $(window);

$window.on('scroll', checkIfInView);

$window.on('scroll resize', checkIfInView);

$window.trigger('scroll');

function checkIfInView () {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animationElement, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {

          if ($element.hasClass("type")) {
            $element.addClass('type-animation');
          }

          if ($element.hasClass("fadeIn")) {
            $element.addClass('fade-in-animation');
          }

          if ($element.hasClass("fadeUp")) {
            $element.addClass('fade-up-animation');
          }
    }
  });
}
