$(document).ready(function() {
  var page = $('html, body');

  checkIfInView();

  $(document).on('click', '.back-arrow', function(e) {
    e.preventDefault();

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
      page.stop();
    });

    $('html, body').animate({ scrollTop: $('#explore').offset().top }, 2000, function() {
      page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
    });
  });

  $(document).on('click', '.card-image', function(e) {
    var className = $(this).attr('class');
    $('.work-pictures').remove();

    switch(className) {
      case 'card-image next':
        /*jshint multistr: true */
        $(this).replaceWith("<img class='next gif-image' src='../images/explore/next/next-gif.gif'>");

        break;

      case 'card-image welcome-packet':
        /*jshint multistr: true */
        $(this).replaceWith("<img src='../images/explore/welcome-packet/welcome-packet-gif.gif'>");

        break;

      case 'card-image staff-corner':
        /*jshint multistr: true */
        $(this).replaceWith("<img src='../images/explore/staff-corner/staff-corner-gif.gif'>");

      break;

      case 'card-image style-guide':
        /*jshint multistr: true */
        $(this).replaceWith("<img src='../images/explore/style-guide/style-guide-gif.gif'>");

        break;

      case 'card-image game-plan':
      /*jshint multistr: true */
      $(this).replaceWith("<img src='../images/explore/next/next-gif.gif'>");

        break;

      case 'card-image app':
        /*jshint multistr: true */
        $(this).replaceWith("<img class='app-gif' src='../images/explore/id-app/app-gif.gif'>");

        break;

      case 'card-image health-and-safety':
        /*jshint multistr: true */
        $(this).replaceWith("<img src='../images/explore/health-and-safety/health-and-safety-gif.gif'>");

        break;

      case 'card-image the-spot':
        /*jshint multistr: true */
        $(this).replaceWith("<img src='../images/explore/the-spot/the-spot-gif.gif'>");

        break;

      case 'card-image cocooned':
        /*jshint multistr: true */
        $(this).replaceWith("<iframe width='100%' height='315' src='https://www.youtube.com/embed/p_AjuZLL1wc' frameborder='0' allowfullscreen></iframe>");

        break;

      case 'card-image project-warp':
        /*jshint multistr: true */
        $(this).replaceWith("<iframe width='100%' height='315' src='https://www.youtube.com/embed/MpW7fD13Wjw' frameborder='0' allowfullscreen></iframe>");

        break;

      case 'card-image tractor-tipping':
        $(this).replaceWith("<img src='../images/explore/tractor-tipping/tractor-tipping-gif.gif'>");

        break;
    }
  });

  $(window).scroll(function(){
     var currentScroll = $(window).scrollTop();

     if (checkIfInView2($('.sticky-nav'), $('#explore'))) {
       $('.sticky-nav ul').addClass('--explore-active');
       checkIfInView();
     } else {
       $('.sticky-nav ul').removeClass('--explore-active');
     }

     if (checkIfInView2($('.small-icons'), $('#explore'))) {
       $('.small-icons i').addClass('--explore-active');
     } else {
       $('.small-icons i').removeClass('--explore-active');
     }
  });

  $(document).on('click', '.nav-element', function(e) {
    // Scroll to portfolio
    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
      page.stop();
    });

    $('html, body').animate({ scrollTop: $('#explore').offset().top }, 2000, function() {
      page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
    });

    // Initially, show all of the explore titles
    $(this).removeClass('dim');
    $(this).removeClass('hidden');
    $('#explore').css('height', 'auto');

    $('.work-pictures').remove();

    // Stop anything from firing twice
    e.preventDefault();

    // Create our variables to pass in
    var $item1;
    var $item2;

    // Get the class name of what we clicked
    var className = $(this).attr('class');

    switch(className) {
        case 'web-nav-button animated nav-element fadeInLeft fadeInLeft-1':
        case 'web-nav-button animated nav-element fadeInLeft fadeInLeft-1 --explore-active':
          // Show the explore title that we want to see,
          // dim the others
          $item1 = '.web-design';
          $item2 = '.games';
          hideTitlesExpanders($item1, $item2);

          // Show the work that we want to see, and
          // keep the others hidden
          if ($('.web-expanded').hasClass('hidden')) {
              $('.web-expanded').toggleClass('hidden');
          }

          break;

        case 'games-nav-button animated nav-element fadeInLeft fadeInLeft-3':
        case 'games-nav-button animated nav-element fadeInLeft fadeInLeft-3 --explore-active':
          // Show the explore title that we want to see,
          // dim the others
          $item1 = '.web';
          $item2 = '.web-design';
          hideTitlesExpanders($item1, $item2);

          // Show the work that we want to see, and
          // keep the others hidden
          if ($('.games-expanded').hasClass('hidden')) {
              $('.games-expanded').toggleClass('hidden');
          }

          break;
    }
  });

  function hideTitlesExpanders ($item1, $item2, $item3) {
    $(this).removeClass('dim');
    var item1Title = $item1 + '-title';
    var item2Title = $item2 + '-title';
    $(item1Title).addClass('dim');
    $(item2Title).addClass('dim');
    var item1Expand = $item1 + '-expanded';
    var item2Expand = $item2 + '-expanded';
    $(item1Expand).addClass('hidden');
    $(item2Expand).addClass('hidden');
  }

  //Cache reference to window and animation items
  var $animationElement = $('.animation-element');
  var $window = $(window);

  $window.on('scroll', checkIfInView);

  $window.on('scroll resize', checkIfInView);

  $window.trigger('scroll');

  function checkIfInView2 ($element1, $element2) {
    var element1Height = $element1.outerHeight();
    var element1TopPosition = $element1.offset().top;
    var element1BottomPosition = (element1TopPosition + element1Height);

    var element2Height = $element2.outerHeight();
    var element2TopPosition = $element2.offset().top;
    var element2BottomPosition = (element2TopPosition + element2Height);

    //check to see if this current container is within viewport
    if ((element2BottomPosition >= element1TopPosition) &&
        (element2TopPosition <= element1BottomPosition)) {
          return true;
    } else {
      return false;
    }
  }

  function checkIfInView () {
    var window_height = $(window).height();
    var window_top_position = $(window).scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animationElement, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {

            if ($element.hasClass('type1')) {
              $element.addClass('type-1-animation');
            }

            if ($element.hasClass('type2')) {
              $element.addClass('type-2-animation');
            }

            if ($element.hasClass('card')) {
              $element.addClass('animated');
              $element.addClass('bounceInRight');
            }
      }
    });
  }
});
