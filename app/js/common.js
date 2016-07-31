$(function() {
	function mobMnu(){
		if($(this).children().hasClass('material-design-hamburger__icon--to-arrow')){
			$('.slideMenu').animate({'left':'-300px'},400)
		}else{
			$('.slideMenu').animate({'left':'0'},400)
		}
	}

	$('.material-design-hamburger__icon').click(mobMnu)

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

	$('.bg-holder').parallaxScroll({
	  friction: 0.3
	});

	$('.teachers').parallaxScroll({
	  friction: 0.15
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});




	(function() {

	  'use strict';

	  document.querySelector('.material-design-hamburger__icon').addEventListener(
	    'click',
	    function() {
	      var child;

	      document.body.classList.toggle('background--blur');
	      this.parentNode.nextElementSibling.classList.toggle('menu--on');

	      child = this.childNodes[1].classList;

	      if (child.contains('material-design-hamburger__icon--to-arrow')) {
	        child.remove('material-design-hamburger__icon--to-arrow');
	        child.add('material-design-hamburger__icon--from-arrow');
	      } else {
	        child.remove('material-design-hamburger__icon--from-arrow');
	        child.add('material-design-hamburger__icon--to-arrow');
	      }

	    });

	})();

});
