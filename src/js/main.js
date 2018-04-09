/*-------------------Navbar-toggler---------------*/

    $('.navbar-toggler').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass('collapse');
    });
    /*------Slider-header--------*/
$(document).ready(function(){
  $('.slider-header').slick({
    arrows: false,
    dots: false,
     dotsClass: "my-dots",
    
  });
});

/*------------Slider-------*/

$(document).ready(function(){
  $('.slider').slick({
  	prevArrow: '<div class="prev"></div>',
  	nextArrow: '<div class="next"></div>',
  	arrows: true,
  	infinite: true,
  	slidesToShow: 4,
  	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
	]
    
  });
});



  /*-----------------Scroll-to-top-----------------*/

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollup').fadeIn();
        } else {
            $('#scrollup').fadeOut();
        }
    });

    $('#scrollup').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    /*--------Якоря------*/

$(document).ready(function() {
    $(".menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});