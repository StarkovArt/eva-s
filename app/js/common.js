$(function() {
	$('.user_accaunt').on('click', function(){
		$('.togglemnu').slideToggle();
	});

	var docH = $('.hidemenuR').height();
	var docHeight = 30+docH;

	$(window).on('resize', function(){
		var docH1 = $('.hidemenuR').height();
		var docHeight2 = 30+docH1;
		$('.content__left-wrap').height(docHeight2);

		var width = $(this).width();
		if(width){
			$('.cross').on('click', function(){
				$('.cross').toggleClass('flag');
			});
		}
	})

$('.content__left-wrap').height(docHeight);


//мобильное меню
var windowWidth = $(this).width()
if(windowWidth < 768 ){
	$('.cross').on('click', function(){
		$('.hidemenul').toggleClass('col-xs-1 hidden-xs');
		$('.hidemenuR').toggleClass('col-xs-11 col-xs-12');
	});
}else if(windowWidth >= 1200){
		$('.cross').on('click', function(){
				$('.cross').toggleClass('flag');
				$('.hidemenul').toggleClass('col-lg-1 col-lg-2');
				$('.general_mnu ul li a i').toggleClass('i');
					$('.general_mnu ul li a span').toggleClass('dn');
				$('.hidemenuR').toggleClass('col-lg-11 col-lg-10');
		});
}



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

});
