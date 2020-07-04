$(function() {



	// Trasparent header
	var scrollOffset = $(window).scrollTop();
	var scrollPos1 = 0;
	var scrollPos2 = 0;

	function removeTrasparent() {
		if (scrollOffset >= 100) {
			$('.header').removeClass('header_transparent');
			$('.nav__item').removeClass('nav__item_light');
			$('.burger__item').removeClass('burger__item_light');
			$('.header__dark-logo').css({opacity: '1'});
			$('.header__light-logo').css({opacity: '0'});
			console.log('remove');
			}
	}

	removeTrasparent();

	$(window).on('scroll', function() {
		scrollOffset = $(this).scrollTop();

		removeTrasparent();

		if (scrollOffset < 100) {
			$('.header').addClass('header_transparent');
			$('.nav__item').addClass('nav__item_light');
			$('.burger__item').addClass('burger__item_light');
			$('.header__dark-logo').css({opacity: '0'});
			$('.header__light-logo').css({opacity: '1'});
		}

		if (scrollPos1 < scrollOffset) {
		

			if (scrollOffset >= 400 && scrollPos1 - scrollPos2 >= 50) {
				$('.header').slideUp(400);
				scrollPos1 = scrollOffset;
				scrollPos2 = 0;
				console.log(scrollOffset);
			}

		} else if (scrollPos2 - scrollPos1 >= 50){
			$('.header').slideDown(400);
			scrollPos2 = 0;
		} else if (scrollPos2 === 0){
			scrollPos2 = scrollPos1;
		}

		scrollPos1 = scrollOffset;

	});


	// Smooth Scroll
	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();
		
		var blockId = $(this).data('scroll'),
		blockOffset = $(blockId).offset().top,
		scrollTime = blockOffset * 0.5;

		if (scrollTime <500) {
			scrollTime = 600
		}

		$('html, body').animate({
			scrollTop: blockOffset 
		}, scrollTime);

	});

	// Carousel
	var quotes = $('#owl-carousel-1');

	quotes.owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 7000,
		autoplaySpeed: 800,
		dotsSpeed: 800,
		dragEndSpeed: 800
	});


	$('.owl-dot.active').animate({width: '10px', height: '10px', opacity: '1'}, { duration: 300, queue: false });

	quotes.on('changed.owl.carousel', function(event) {
		$('.owl-dot').animate({width: '6px', height: '6px', opacity: '0.25'}, { duration: 300, queue: false });
		$('.owl-dot.active').animate({width: '10px', height: '10px', opacity: '1'}, { duration: 300, queue: false });
	})

	



})