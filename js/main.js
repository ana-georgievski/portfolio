;(function () {
	document.querySelector(".desc1").addEventListener("click", affiche);
	function affiche(){
		document.querySelector(".flexouille").classList.toggle("ouvrir");
		document.querySelector(".croix").classList.add("opencroix");
	}

	document.querySelector(".desc2").addEventListener("click", affiche2);
	function affiche2(){
		document.querySelector(".flexouille2").classList.toggle("ouvrir");
		document.querySelector(".croix2").classList.add("opencroix");
	}

	document.querySelector(".desc3").addEventListener("click", affiche3);
	function affiche3(){
		document.querySelector(".flexouille3").classList.toggle("ouvrir");
		document.querySelector(".croix3").classList.add("opencroix");
	}

	document.querySelector(".desc4").addEventListener("click", affiche4);
	function affiche4(){
		document.querySelector(".flexouille4").classList.toggle("ouvrir");
		document.querySelector(".croix4").classList.add("opencroix");
	}

	document.querySelector(".desc5").addEventListener("click", affiche5);
	function affiche5(){
		document.querySelector(".flexouille5").classList.toggle("ouvrir");
		document.querySelector(".croix5").classList.add("opencroix");
	}

	document.querySelector(".desc6").addEventListener("click", affiche6);
	function affiche6(){
		document.querySelector(".flexouille6").classList.toggle("ouvrir");
		document.querySelector(".croix6").classList.add("opencroix");
	}

	document.querySelector(".desc7").addEventListener("click", affiche7);
	function affiche7(){
		document.querySelector(".flexouille7").classList.toggle("ouvrir");
		document.querySelector(".croix7").classList.add("opencroix");
	}

	document.querySelector(".desc8").addEventListener("click", affiche8);
	function affiche8(){
		document.querySelector(".flexouille8").classList.toggle("ouvrir");
		document.querySelector(".croix8").classList.add("opencroix");
	}



	// Croix
	document.querySelector(".croix").addEventListener("click", fermer);
	function fermer(){
		document.querySelector(".flexouille").classList.toggle("ouvrir");
	}

	document.querySelector(".croix2").addEventListener("click", fermer2);
	function fermer2(){
		document.querySelector(".flexouille2").classList.toggle("ouvrir");
	}

	document.querySelector(".croix3").addEventListener("click", fermer3);
	function fermer3(){
		document.querySelector(".flexouille3").classList.toggle("ouvrir");
	}

	document.querySelector(".croix4").addEventListener("click", fermer4);
	function fermer4(){
		document.querySelector(".flexouille4").classList.toggle("ouvrir");
	}

	document.querySelector(".croix5").addEventListener("click", fermer5);
	function fermer5(){
		document.querySelector(".flexouille5").classList.toggle("ouvrir");
	}

	document.querySelector(".croix6").addEventListener("click", fermer6);
	function fermer6(){
		document.querySelector(".flexouille6").classList.toggle("ouvrir");
	}

	document.querySelector(".croix7").addEventListener("click", fermer7);
	function fermer7(){
		document.querySelector(".flexouille7").classList.toggle("ouvrir");
	}

	document.querySelector(".croix8").addEventListener("click", fermer8);
	function fermer8(){
		document.querySelector(".flexouille8").classList.toggle("ouvrir");
	}
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});
					
				}, 50);
				
			}

		} , { offset: '85%' } );
	};



	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	var pieChart = function() {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 4,
			lineCap: 'butt',
			barColor: '#FF9000',
			trackColor:	"#f5f5f5",
			size: 160,
			animate: 1000
		});
	};

	var skillsWayPoint = function() {
		if ($('#fh5co-skills').length > 0 ) {
			$('#fh5co-skills').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( pieChart , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}

	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	
	$(function(){
		contentWayPoint();
		goToTop();
		loaderPage();
		fullHeight();
		parallax();
		// pieChart();
		skillsWayPoint();
	});


}());