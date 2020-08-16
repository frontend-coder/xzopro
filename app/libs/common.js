$(document).ready(function () {

  $(".hamburger").on('click', function () {
    $('.hamburger').toggleClass('is-active');
    $('.mobile_wrapper').toggleClass('active');
    $('html').toggleClass('stopped');
    $('body').toggleClass('stopped');
  }); (function ($, window, document, undefined) {
      var pluginName = "jqueryAccordionMenu";
      var defaults = {
        speed: 300,
        showDelay: 0,
        hideDelay: 0,
        singleOpen: true,
        clickEffect: true
      };
      function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({},
          defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init()
      };
      $.extend(Plugin.prototype, {
        init: function () {
          this.openSubmenu();
          this.submenuIndicators();
          if (defaults.clickEffect) {
            this.addClickEffect()
          }
        },
        openSubmenu: function () {
          $(this.element).children("ul").find("li").bind("click touchstart",
            function (e) {
              e.stopPropagation();
              e.preventDefault();
              if ($(this).children(".submenu").length > 0) {
                if ($(this).children(".submenu").css("display") == "none") {
                  $(this).children(".submenu").delay(defaults.showDelay).slideDown(defaults.speed);
                  $(this).children(".submenu").siblings("a").addClass("submenu-indicator-minus");
                  if (defaults.singleOpen) {
                    $(this).siblings().children(".submenu").slideUp(defaults.speed);
                    $(this).siblings().children(".submenu").siblings("a").removeClass("submenu-indicator-minus")
                  }
                  return false
                } else {
                  $(this).children(".submenu").delay(defaults.hideDelay).slideUp(defaults.speed)
                }
                if ($(this).children(".submenu").siblings("a").hasClass("submenu-indicator-minus")) {
                  $(this).children(".submenu").siblings("a").removeClass("submenu-indicator-minus")
                }
              }
              window.location.href = $(this).children("a").attr("href")
            })
        },
        submenuIndicators: function () {
          if ($(this.element).find(".submenu").length > 0) {
            $(this.element).find(".submenu").siblings("a").append("<span class='submenu-indicator'>+</span>")
          }
        },
        addClickEffect: function () {
          var ink, d, x, y;
          $(this.element).find("a").bind("click touchstart",
            function (e) {
              $(".ink").remove();
              if ($(this).children(".ink").length === 0) {
                $(this).prepend("<span class='ink'></span>")
              }
              ink = $(this).find(".ink");
              ink.removeClass("animate-ink");
              if (!ink.height() && !ink.width()) {
                d = Math.max($(this).outerWidth(), $(this).outerHeight());
                ink.css({
                  height: d,
                  width: d
                })
              }
              x = e.pageX - $(this).offset().left - ink.width() / 2;
              y = e.pageY - $(this).offset().top - ink.height() / 2;
              ink.css({
                top: y + 'px',
                left: x + 'px'
              }).addClass("animate-ink")
            })
        }
      });
      $.fn[pluginName] = function (options) {
        this.each(function () {
          if (!$.data(this, "plugin_" + pluginName)) {
            $.data(this, "plugin_" + pluginName, new Plugin(this, options))
          }
        });
        return this
      }
    })(jQuery, window, document);



  //обработчик

    jQuery("#jquery-accordion-menu").jqueryAccordionMenu();

  //активный класс
  $(function () {
    $("#demo-list li").click(function () {
      $("#demo-list li.active").removeClass("active");
      $(this).addClass("active");
    })
  });
  
  



var objToStick = $(".top_menu"); //Получаем нужный объект

 $(window).scroll(function () {
   var windowScroll = $(window).scrollTop();//Получаем величину, показывающую на сколько прокручено окно
   if (windowScroll > 400) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
     $(objToStick).addClass("menu-up-lip");
 } else {
     $(objToStick).removeClass("menu-up-lip");
   };
 });

  $(window).scroll(function () {
    var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно
    if (windowScroll > window.innerHeight) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
      $(objToStick).addClass("menu-up-lip-down");
    } else {
      $(objToStick).removeClass("menu-up-lip-down");
    };
  });























  $('.header_slider_wraper').slick({
    arrows: false,
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
  responsive: [
    {
      breakpoint: 2600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 835,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 686,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
     }
  ]
});

$('#carousel_adwice').slick({
  dots: true,
  infinite: true,

  autoplay: true,
  autoplaySpeed: 2000,
//centerMode: true,
  focusOnSelect: true, 
  responsive: [
    {
      breakpoint: 2600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 835,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 686,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]

  
});



$('#carousel_ourteam').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 2600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 835,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 686,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]


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
