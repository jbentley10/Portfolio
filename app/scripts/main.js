$(document).ready(function() {
  var page = $('html, body');

  checkIfInView();

  $(document).on('click', '.portfolio-item', function(e) {
    var className = $(this).attr('class');
    console.log(className);

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
       page.stop();
    });

    if (className.indexOf("staff-corner") >= 0) {
      $('html, body').animate({ scrollTop: $('.staff-corner-title').offset().top }, 2000, function() {
        page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
      });
    } else if (className.indexOf("next") >= 0) {
      $('html, body').animate({ scrollTop: $('.card-image .next').offset().top }, 2000, function() {
        page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
      });
    } else if (className.indexOf("style-guide") >= 0) {
      $('html, body').animate({ scrollTop: $('.card-image .style-guide').offset().top }, 2000, function() {
        page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
      });
    } else if (className.indexOf("cocooned") >= 0) {
      $('html, body').animate({ scrollTop: $('.cocooned-title').offset().top }, 2000, function() {
        page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
      });
    } else if (className.indexOf("tractor-tipping") >= 0) {
      $('html, body').animate({ scrollTop: $('.tractor-tipping-title').offset().top }, 2000, function() {
        page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
      });
    } else if (className.indexOf("project-warp") >= 0) {
      $('html, body').animate({ scrollTop: $('.card-image .project-warp').offset().top }, 2000, function() {
        page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
      });
    }
  });

  $(document).on('click', '.trigger', function(e) {
    var className = $(this).attr('class');
    console.log(className);

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
       page.stop();
    });

    $('html, body').animate({ scrollTop: $('#explore').offset().top }, 2000, function() {
      page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
    });

    // If you click "Web Development"
    if (className.indexOf("web") >= 0) {
      $('.web-expanded').removeClass('--hidden');
      $('.--web-development').removeClass('--hidden');

      // Remove the content related to games
      $('.games-expanded').addClass('--hidden');

      // Remove box navigation related to games
      $('.--game-development').addClass('--hidden');

      $('.card-type.development').removeClass('--hidden');
      $('.card-type.webpage').removeClass('--hidden');
      $('.card-type.personas').removeClass('--hidden');
    }

    // If you click "Game Development"
    if (className.indexOf("games") >= 0) {
      console.log("clicked: " + className);
      $('.games-expanded').removeClass('--hidden');
      $('.games-expanded').removeClass('hidden');
      $('.--game-development').removeClass('--hidden');

      // Remove the content related to games
      $('.web-expanded').addClass('--hidden');

      // Remove box navigation related to games
      $('.--web-development').addClass('--hidden');

      $('.card-type.webpage').removeClass('--hidden');
      $('.card-type.mobile').removeClass('--hidden');
      $('.card-type.flash').removeClass('--hidden');
    }

    // If you click "Show All"
    if (className.indexOf("all") >= 0) {
      $('.web-expanded').removeClass('--hidden');
      $('.games-expanded').removeClass('--hidden');

      $('.--web-development').removeClass('--hidden');
      $('.--game-development').removeClass('--hidden');

      $('.card-type.development').removeClass('--hidden');
      $('.card-type.webpage').removeClass('--hidden');
      $('.card-type.personas').removeClass('--hidden');

      $('.card-type.webpage').removeClass('--hidden');
      $('.card-type.mobile').removeClass('--hidden');
      $('.card-type.flash').removeClass('--hidden');
    }
  });

  $(document).on('click', '.subnav', function(e) {
    var className = $(this).attr('class');

    $('.--hidden').removeClass('--hidden');

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
       page.stop();
    });

    $('html, body').animate({ scrollTop: $('#explore').offset().top }, 2000, function() {
      page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
    });

    if (className.indexOf("research") >= 0) {
      $('.card-type.development').addClass('--hidden');
      $('.card-type.wireframe').addClass('--hidden');

      // Remove all of the games content
      $('.games-expanded').addClass('--hidden');

      // Keep the navigation boxes that relate to research
      $('.--personas').addClass('--hidden');
      $('.--user-testing').removeClass('--hidden');

      $('.persona').addClass('--hidden');

      // Remove all of the navigation boxes
      $('.--web-development').addClass('--hidden');
      $('.--game-development').addClass('--hidden');
    }

    if (className.indexOf("personas") >= 0) {
      $('.card-type .development').removeClass('--hidden');
      // Remove all of the navigation boxes
      $('.--web-development').addClass('--hidden');

      // Remove all of the main content
      $('.card-type').addClass('--hidden');
      $('.web-expanded').removeClass('--hidden');
      $('.games-expanded').addClass('--hidden');

      // Keep the navigation boxes that relate to research
      $('.--personas').removeClass('--hidden');
      $('.--user-testing').removeClass('--hidden');

      $('.personas').removeClass('--hidden');
      $('.research').addClass('--hidden');

      $('.subnav.research').removeClass('--hidden');

      $('.--game-development').addClass('--hidden');
    }

    if (className.indexOf("webpages") >= 0) {
      $('.card-type .development').removeClass('--hidden');
      // Remove all of the navigation boxes
      $('.--game-development').addClass('--hidden');

      // Remove all of the main content
      $('.games-expanded').removeClass('--hidden');
      $('.games-expanded').addClass('--hidden');

      // Keep the navigation boxes that relate to webpages
      $('.--webpage').removeClass('--hidden');
      $('.--personas').addClass('--hidden');
      $('.--user-testing').addClass('--hidden');

      $('.persona').addClass('--hidden');
      $('.user-testing').addClass('--hidden');
      $('.card.research').addClass('--hidden');

      $('.development').removeClass('--hidden');
    }

    // GAME DEVELOPMENT
    // WEBPAGES
    if (className.indexOf("web-game") >= 0) {
      // Remove all of the navigation boxes
      $('.--web-development').addClass('--hidden');
      $('.--game-development').addClass('--hidden');

      // Remove all of the main content
      $('.web-expanded').addClass('--hidden');
      $('.games-expanded').removeClass('--hidden');

      // Keep the navigation boxes that relate to research
      $('.--game-development.--web').removeClass('--hidden');

      $('.card-type.mobile').addClass('--hidden');
      $('.card-type.flash').addClass('--hidden');
      $('.card-type.webpage').removeClass('--hidden');
    }

    // GAME DEVELOPMENT
    // Flash
    if (className.indexOf("flash") >= 0) {
      // Remove all of the navigation boxes
      $('.--web-development').addClass('--hidden');

      // Remove all of the main content
      $('.web-expanded').addClass('--hidden');
      $('.games-expanded').removeClass('--hidden');

      // Keep the navigation boxes that relate to research
      $('.--flash').removeClass('--hidden');
      $('.--web').addClass('--hidden');
      $('.--mobile').addClass('--hidden');

      $('.card-type.mobile').addClass('--hidden');
      $('.card-type.webpage').addClass('--hidden');
      $('.card-type.flash').removeClass('--hidden');
    }

    // GAME DEVELOPMENT
    // Mobile
    if (className.indexOf("mobile") >= 0) {
      console.log("oh yeah clicked mobile.");
      // Remove all of the navigation boxes
      $('.--web-development').addClass('--hidden');

      // Remove all of the main content
      $('.web-expanded').addClass('--hidden');
      $('.games-expanded').removeClass('--hidden');

      // Keep the navigation boxes that relate to research
      $('.--mobile').removeClass('--hidden');
      $('.--web').addClass('--hidden');
      $('.--flash').addClass('--hidden');

      $('.card-type.flash').addClass('--hidden');
      $('.card-type.webpage').addClass('--hidden');
      $('.card-type.mobile').removeClass('--hidden');
    }

    // GAME DEVELOPMENT
    // Prototypes
    if (className.indexOf("prototypes") >= 0) {
      // Remove all of the navigation boxes
      $('.--web-development').addClass('--hidden');

      // Remove all of the main content
      $('.web-expanded').addClass('--hidden');
      $('.games-expanded').removeClass('--hidden');

      // Keep the navigation boxes that relate to research
      $('.--mobile').removeClass('--hidden');
      $('.--flash').removeClass('--hidden');
      $('.--web').addClass('--hidden');

      $('.card-type.webpage').addClass('--hidden');
      $('.card-type.flash').removeClass('--hidden');
      $('.card-type.mobile').removeClass('--hidden');
    }

    // GAME DEVELOPMENT
    // User Testing
    if (className.indexOf("user-testing") >= 0) {
      // Remove all of the navigation boxes
      $('.--web-development').addClass('--hidden');

      // Remove all of the main content
      $('.web-expanded').addClass('--hidden');
      $('.games-expanded').removeClass('--hidden');

      // Keep the navigation boxes that relate to research
      $('.--flash').removeClass('--hidden');
      $('.--mobile').addClass('--hidden');
      $('.--web').addClass('--hidden');

      $('.card-type.webpage').addClass('--hidden');
      $('.card-type.mobile').addClass('--hidden');
      $('.card-type.flash').removeClass('--hidden');
    }
  });

  $(document).on('click', '.back-arrow', function(e) {
    e.preventDefault();

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
      page.stop();
    });

    $('html, body').animate({ scrollTop: $('#explore').offset().top }, 2000, function() {
      page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
    });
  });

  $('span.web-trigger').hover(function() {
    $('.web-nav-button').css("height", "110px");
    $('span.web-nav-button').css("color", "#999");
    $('.web-nav-button a.subnav').css("color", "#fff");
    /* jshint multistr: true */
    if (!$('.subnav').length) {
      $('ul.web-nav-button').append("\
        <li><a class='subnav research'>&nbsp;Research</a></li>\
        <li><a class='subnav personas'>&nbsp;Personas</a></li>\
        <li><a class='subnav webpages'>&nbsp;Webpages</a></li>\
      ");
    }

    if (checkIfInView2($('.sticky-nav'), $('#explore'))) {
      $('.sticky-nav span').addClass('--explore-active');
      $('.sticky-nav span').css('color', '#333');
      $('.sticky-nav a').addClass('--explore-active');
      $('.sticky-nav a').css('color', '#333');
      checkIfInView();
    } else {
      $('.sticky-nav span').removeClass('--explore-active');
      $('.sticky-nav span').css('color', '#fff');
      $('.sticky-nav a').addClass('--explore-active');
      $('.sticky-nav a').css('color', '#fff');
    }
  });

  $('.web').mouseleave(function() {
    $('.web-nav-button').css("height", "0");
    $('span.web-nav-button').css("color", "#fff");

    /* jshint multistr: true */
    $('ul.web-nav-button').children().remove();

    if (checkIfInView2($('.sticky-nav'), $('#explore'))) {
      $('.sticky-nav ul').addClass('--explore-active');
      $('.sticky-nav ul').css('color', '#333');
      $('.sticky-nav a').addClass('--explore-active');
      $('.sticky-nav a').css('color', '#333');
      checkIfInView();
    } else {
      $('.sticky-nav ul').removeClass('--explore-active');
      $('.sticky-nav ul').css('color', '#fff');
      $('.sticky-nav a').addClass('--explore-active');
      $('.sticky-nav a').css('color', '#fff');
    }
  });

  $('span.games-trigger').hover(function() {
    $('.games-nav-button').css("height", "185px");
    $('.games-nav-button').css("width", "50%");
    $('ul.games-nav-button').css("color", "#999");
    $('.games-nav-button a.subnav').css("color", "#fff");

    if (!$('.subnav').length) {
      /* jshint multistr: true */
      $('ul.games-nav-button').append("\
        <li><a class='subnav animated fadeInLeft web-game'>&nbsp;Webpages</a></li>\
        <li><a class='subnav animated fadeInLeft flash'>&nbsp;Flash</a></li>\
        <li><a class='subnav animated fadeInLeft mobile'>&nbsp;Mobile</a></li>\
        <li><a class='subnav animated fadeInLeft prototypes'>&nbsp;Prototypes</a></li>\
        <li><a class='subnav animated fadeInLeft user-testing'>&nbsp;User Testing</a></li>\
      ");
    }

    if (checkIfInView2($('.sticky-nav'), $('#explore'))) {
      $('.sticky-nav ul').addClass('--explore-active');
      $('.sticky-nav ul').css('color', '#333');
      $('.sticky-nav a').addClass('--explore-active');
      $('.sticky-nav a').css('color', '#333');
      checkIfInView();
    } else {
      $('.sticky-nav ul').removeClass('--explore-active');
      $('.sticky-nav ul').css('color', '#fff');
      $('.sticky-nav a').addClass('--explore-active');
      $('.sticky-nav a').css('color', '#fff');
    }
  });

  $('.games').mouseleave(function() {
    $('.games-nav-button').css("height", "0");
    $('ul.games-nav-button').css("color", "#fff");

    $('ul.games-nav-button').children().remove();

    if (checkIfInView2($('.sticky-nav'), $('#explore'))) {
      $('.sticky-nav ul').addClass('--explore-active');
      $('.sticky-nav ul').css('color', '#333');
      $('.sticky-nav a').addClass('--explore-active');
      $('.sticky-nav a').css('color', '#333');
      checkIfInView();
    } else {
      $('.sticky-nav ul').removeClass('--explore-active');
      $('.sticky-nav ul').css('color', '#fff');
      $('.sticky-nav a').addClass('--explore-active');
      $('.sticky-nav a').css('color', '#fff');
    }
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
       $('.sticky-nav span').css('color', '#333');
       $('.sticky-nav a').addClass('--explore-active');
       $('.sticky-nav a').css('color', '#333');
       checkIfInView();
     } else {
       $('.sticky-nav ul').removeClass('--explore-active');
       $('.sticky-nav span').css('color', '#fff');
       $('.sticky-nav a').addClass('--explore-active');
       $('.sticky-nav a').css('color', '#fff');
     }

     if (checkIfInView2($('.small-icons'), $('#explore'))) {
       $('.small-icons i').addClass('--explore-active');
     } else {
       $('.small-icons i').removeClass('--explore-active');
     }
  });

  $(document).on('click', '.trigger', function(e) {
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
        case 'trigger web-trigger animated fadeInLeft fadeInLeft-1':
        case 'trigger web-trigger animated fadeInLeft fadeInLeft-1 --explore-active':
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

        case 'trigger games-trigger animated fadeInLeft fadeInLeft-2':
        case 'trigger games-trigger animated fadeInLeft fadeInLeft-2 --explore-active':
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
