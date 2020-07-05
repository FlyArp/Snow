$(function() {


	var scrollOffset = $(window).scrollTop(),
	scrollPos1 = 0,
	scrollPos2 = 0;

	function removeTrasparent() {
		if (scrollOffset >= 100) {
			$('.header').removeClass('header_transparent');
			$('.nav__item').removeClass('nav__item_light');
			$('.burger__item').removeClass('burger__item_light');
			$('.header__dark-logo').css({opacity: '1'});
			$('.header__light-logo').css({opacity: '0'});
		}
	}

	function addTransparent() {
		$('.header').addClass('header_transparent');
		$('.nav__item').addClass('nav__item_light');
		$('.burger__item').addClass('burger__item_light');
		$('.header__dark-logo').css({opacity: '0'});
		$('.header__light-logo').css({opacity: '1'});
	}

	function expandMenu() {
		$('.nav-expand').slideToggle(700);
		if ($('.header').hasClass('header_transparent')) {
			setTimeout(removeTrasparent, 400);
		} else {
			addTransparent();
		}
	}

	// Trasparent header
	removeTrasparent();

	$(window).on('scroll', function() {
		scrollOffset = $(this).scrollTop();
		removeTrasparent();
		if (scrollOffset < 100) {
			addTransparent()
		}
		if (scrollPos1 < scrollOffset) {
			if (scrollOffset >= 400 && scrollPos1 - scrollPos2 >= 100) {
				$('.header').slideUp(400);
				scrollPos1 = scrollOffset;
				scrollPos2 = 0;
			}
		} else if (scrollPos2 - scrollPos1 >= 100){
			$('.header').slideDown(400);
			scrollPos2 = 0;
		} else if (scrollPos2 === 0){
			scrollPos2 = scrollPos1;
		}
		scrollPos1 = scrollOffset;
	});

	// Burger
	$('.burger').on('click', function(event) {
		expandMenu();
	});

	// Smooth Scroll
	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();
		
		var blockId = $(this).data('scroll'),
		blockOffset = $(blockId).offset().top,
		scrollTime = Math.abs($(window).scrollTop() - blockOffset) * 0.5;

		if ($(window).scrollTop() - blockOffset > 0) {
			blockOffset = blockOffset - $('.header').height();
		}
		console.log($(window).scrollTop() - blockOffset);


		if (scrollTime <500) {
			scrollTime = 700;
		}

		if ($('.nav').css('display') ==='flex' && $('.nav-expand').css('display') === 'block') {
			expandMenu();
		}

		$('html, body').animate({
			scrollTop: blockOffset 
		}, {duration: scrollTime, queue: false});

	});

	// Carousel
	var quotes = $('.quote-block');

	quotes.owlCarousel({
		items: 1,
		loop: true,
		dotsSpeed: 800,
		dragEndSpeed: 800
	});


	$('.owl-dot.active').animate({width: '10px', height: '10px', opacity: '1'}, { duration: 300, queue: false });

	quotes.on('changed.owl.carousel', function(event) {
		$('.owl-dot').animate({width: '6px', height: '6px', opacity: '0.25'}, { duration: 300, queue: false });
		$('.owl-dot.active').animate({width: '10px', height: '10px', opacity: '1'}, { duration: 300, queue: false });
	})

	
	var partner = $('.partner');

	partner.owlCarousel({
		items: 2,
		center: true,
		loop:true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 800,
		responsive: {
			480: {
				items: 3,
				stagePadding: 0
			},

			768: {
				items: 5
			}
		}
	});

	var blog = $('.blog');

	blog.owlCarousel({
		items:1,
		loop: true,
		dotsSpeed: 800,
		dragEndSpeed: 800,
		responsive: {
			900: {
				items: 3,
				dotsEach: true
			}
		}
	});

	$('.owl-dot.active').animate({width: '10px', height: '10px', opacity: '1'}, { duration: 300, queue: false });

	blog.on('changed.owl.carousel', function(event) {
		$('.owl-dot').animate({width: '6px', height: '6px', opacity: '0.25'}, { duration: 300, queue: false });
		$('.owl-dot.active').animate({width: '10px', height: '10px', opacity: '1'}, { duration: 300, queue: false });
	})

})