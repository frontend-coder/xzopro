$(document).ready(function () {
	// 	$("body").niceScroll({
	// horizrailenabled:false
	// });
	// вверхнее красиво-вращающееся меню
	// 1 и 2 строка это анимация крестика
	//3 строка - слайдер вниз меню
	//слайдер вниз меню отвечает за работу мобильного меню к переносу
	$(".toggle-mnu").click(function () {
		$(this).toggleClass("on");
		$(".top-menu").slideToggle();
		return false;
	});
	$('body, .top-menu ul li a').click(function () {
		$('.hidden-mnu').hide("slow");
	});


$('.header_slider_wraper').slick({
  dots: true,
  infinite: true,
  speed: 300,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
 // autoplay: true,
  autoplaySpeed: 2000,
});

$('#carousel_trademark').slick({
  dots: true,
  infinite: true,
  speed: 300,
  adaptiveHeight: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});







$('#carousel_adwice').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
//centerMode: true,
  focusOnSelect: true,
// centerPadding: '60px',

// centerMargin: '60px',
});



$('#carousel_ourteam').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
//centerMode: true,
  focusOnSelect: true,
// centerPadding: '60px',

// centerMargin: '60px',
});

 $('.video-play-button').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
  tClose: 'Закрыть (Esc)',
        fixedContentPos: false
    });


    $('.portfolio_grid').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Загружается #%curr%...',
      removalDelay: 300,
      closeOnContentClick: !0,
      mainClass: 'mfp-img-mobile',
      fixedContentPos : false,
      fixedBgPos      : false,
      tClose: 'Закрыть (Esc)',
      gallery: {
        tPrev: 'Предыдущий (левая клавиша на клавиатуре)',
        tNext: 'Следующий (правая клавиша на клавиатуре)',
        tCounter: '%curr% из %total%',
        enabled: true,
        navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  },
  image: {
      tError: '<a href="%url%">Изображение не загружено.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>Васильченко Игорь</small>';
    },
        zoom: {
            enabled: !0,
            duration: 300,
            easing: 'ease-in-out',
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        }
}
});


// $(".inner_cards").magnificPopup({
//     delegate: 'a', // the selector for gallery item
//     type: 'image',
//     tClose: 'Закрыть (Esc)',
//      mainClass: 'mfp-with-zoom',
//      fixedBgPos:false,
// fixedContentPos:false,
//       tLoading: 'Загрузка...',
//   zoom: {
//     enabled: true, // By default it's false, so don't forget to enable it

//     duration: 300, // duration of the effect, in milliseconds
//     easing: 'ease-in-out', // CSS transition easing function
//     // The "opener" function should return the element from which popup will be zoomed in
//     // and to which popup will be scaled down
//     // By defailt it looks for an image tag:
//     opener: function(openerElement) {
//       // openerElement is the element on which popup was initialized, in this case its <a> tag
//       // you don't need to add "opener" option if this code matches your needs, it's defailt one.
//       return openerElement.is('img') ? openerElement : openerElement.find('img');
//     }
//   },
//     gallery: {
//       enabled:true,
//   tPrev: 'Предыдущий (Левая стрелка)', // title for left button
//   tNext: 'Следующий (Правая стрелка)', // title for right button
//   tCounter: '<span class="mfp-counter">%curr% из %total%</span>' // markup of counter
//    }
// });
























	//Ajax push mesege http://api.jquery.com/jquery.ajax/
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function () {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
	//castom code









});
