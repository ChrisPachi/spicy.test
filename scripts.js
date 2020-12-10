'use strict';

/**
 * Custom scripts for Spicy Web test project
 * chris.coinbox@gmail.com
 * Carousel and menu triggers
 **/

$().ready(function() {

	/* menu */
	$('.menu-button').click(function() {
		$('.mobile-menu').css({
			left: -100,
			opacity: 0
		}).animate({
			opacity: 1.0,
		    left: "+=100",
		    height: "toggle"
		});
	});

	$('.mobile-menu-close').click(function() {
		$('.mobile-menu').hide();
	});
	/* main carousel */
	$('.tours-carousel').slick({ 
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
  		autoplaySpeed: 4000,
  		appendDots: $('.tours-carousel-dots')
	});

	/* mobile carousels */
	$('.icons-carousel').slick({ 
		dots: true,
		arrows: false,
		fade: false,
		autoplay: true,
  		autoplaySpeed: 4000,
  		appendDots: $('.icons-carousel-dots')
	});

	$('.top-sheet-carousel').slick({ 
		dots: true,
		arrows: false,
		fade: false,
		autoplay: true,
  		autoplaySpeed: 4000,
  		appendDots: $('.top-sheet-carousel-dots')
	});

});