// // Set Headroom classes and offset
// $(document).ready(function() {
// 	$(".site-header").headroom({
// 	  "tolerance": 5,
// 	  "offset": 205,
// 	  "classes": {
// 	    "initial": "animated",
// 	    "pinned": "slideDown",
// 	    "unpinned": "slideUp",
// 	    "top": "headroom--top",
// 	    "notTop": "headroom--not-top"
// 	  }
// 	});
// });

// Smooth page scroll to an anchor on the same page
$(function() {
  $('a[href*="#"]:not([href="#"]):not([data-toggle="collapse"]):not(.quote-link)').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Toggle active class for hamburgers
$('.hamburger').click(function() {
	$(this).toggleClass('is-active');
    $('#mobile-nav').toggleClass('visible');
});

// Move navbar contents to different container on mobile
var navbarContents = $('#navContents');
enquire.register("screen and (max-width:991px)", {
    match : function() {
		$(navbarContents).appendTo('#mobile-nav');
    },
    unmatch : function() {
		$(navbarContents).appendTo('#navContainer');
    }
});
