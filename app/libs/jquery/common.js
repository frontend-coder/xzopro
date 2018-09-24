$(document).ready(function() {
	$("body").niceScroll({
horizrailenabled:false
});
// вверхнее красиво-вращающееся меню
// 1 и 2 строка это анимация крестика
//3 строка - слайдер вниз меню
//слайдер вниз меню отвечает за работу мобильного меню к переносу
// $(".toggle-mnu").click(function() {
// $(this).toggleClass("on");
// $(".top-menu").slideToggle();
// return false;
// });
// $('body, .top-menu ul li a').click(function () {
// $('.hidden-mnu').hide("slow");
// });

// pagination on lending pages
$("#mainmenu ul li a").mPageScroll2id({
layout                 : "auto",
offset                 : ".top_menu",
scrollEasing           : "linear",
highlightByNextTarget  : true,
keepHighlightUntilNext : true,
autoScrollSpeed        : true,
scrollSpeed            : 1000
});

$(function() {
	$("#phone_key").mask("+7(000)000-00-00", {placeholder: "+7(___)___-__-__",clearIfNotMatch: true});
	$("#phone_header").mask("+7(000)000-00-00", {placeholder: "+7(___)___-__-__",clearIfNotMatch: true});
});

// всплывающие окна обратной связи позвонить мне
$("a[href='#politics'], a[href='#call-backtimer'], a[href='#call-back'], a[href='#call-back4s'], a[href='#call-back6s'], a[href='#call-back8s'], a[href='#call-back10s']").magnificPopup ({
	mainClass:'mfp-fade',
	removalDelay:400,
	type:'inline'
});


/*чтобы в формах был индивидуальный заголовок */
$("a[href='#politics'], a[href='#call-backtimer'], a[href='#call-back'], a[href='#call-back4s'], a[href='#call-back6s'], a[href='#call-back8s'], a[href='#call-back10s']").click(function(){
	var dataForm = $(this).data("form");
	var dataText = $(this).data("text");
	$(".forms-call h4").text(dataText);
	$(".forms-call [name=admin-data]").val(dataForm);
});
$('#carousel_adwice').owlCarousel({
  loop               : true,
  margin             : 25,
  dots               : false,
  nav                : false,
  autoplay           : true,
  autoplayTimeout    : 5000,
  autoplayHoverPause : true,

  responsive         : {
    // breakpoint from 0 up
  0                  : {
  items              : 1
    },
    // breakpoint from 480 up
  480                : {
  items              : 2
    },
    // breakpoint from 768 up
  768                : {
  items              : 3
    }
}
});

$('#carousel_trademark').owlCarousel({
  loop               : true,
  margin             : 25,
  dots               : false,
  nav                : false,
  autoplay           : true,
  autoplayTimeout    : 5000,
  autoplayHoverPause : true,

  responsive         : {
    // breakpoint from 0 up
  0                  : {
  items              : 2
    },
    // breakpoint from 480 up
  480                : {
  items              : 3
    },
    // breakpoint from 768 up
  768                : {
  items              : 5
    }
}
});


$('#carousel_ourteam').owlCarousel({
  loop               : true,
  margin             : 25,
 stagePadding:20,
     center: false,
  dots               : false,
  nav                : false,
  autoplay           : true,
  autoplayTimeout    : 5000,
  autoplayHoverPause : true,

  responsive         : {
    // breakpoint from 0 up
  0                  : {
  items              : 1
    },
    // breakpoint from 480 up
  480                : {
  items              : 1
    },
    // breakpoint from 768 up
  768                : {
  items              : 3
    }
}
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

	var wow = new WOW({
		boxClass: 'wow', // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset: 0, // distance to the element when triggering the animation (default is 0)
		mobile: true, // trigger animations on mobile devices (default is true)
		live: true, // act on asynchronously loaded content (default is true)
		scrollContainer: null // optional scroll container selector, otherwise use window
	});
	wow.init();

$(".inner_cards").magnificPopup({
    delegate: 'a', // the selector for gallery item
    type: 'image',
    tClose: 'Закрыть (Esc)',
     mainClass: 'mfp-with-zoom',
      tLoading: 'Загрузка...',
  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function
    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  },
    gallery: {
      enabled:true,
  tPrev: 'Предыдущий (Левая стрелка)', // title for left button
  tNext: 'Следующий (Правая стрелка)', // title for right button
  tCounter: '<span class="mfp-counter">%curr% из %total%</span>' // markup of counter
   }
});


// начало анимационных чисел
!function(t){t.extend(t.easing,{spincrementEasing:function(t,a,e,n,r){return a===r?e+n:n*(-Math.pow(2,-10*a/r)+1)+e}}),t.fn.spincrement=function(a){function e(t,a){if(t=t.toFixed(a),a>0&&"."!==r.decimalPoint&&(t=t.replace(".",r.decimalPoint)),r.thousandSeparator)for(;o.test(t);)t=t.replace(o,"$1"+r.thousandSeparator+"$2");return t}var n={from:0,to:null,decimalPlaces:null,decimalPoint:".",thousandSeparator:",",duration:1e3,leeway:50,easing:"spincrementEasing",fade:!0,complete:null},r=t.extend(n,a),o=new RegExp(/^(-?[0-9]+)([0-9]{3})/);return this.each(function(){var a=t(this),n=r.from;a.attr("data-from")&&(n=parseFloat(a.attr("data-from")));var o;if(a.attr("data-to"))o=parseFloat(a.attr("data-to"));else if(null!==r.to)o=r.to;else{var i=t.inArray(r.thousandSeparator,["\\","^","$","*","+","?","."])>-1?"\\"+r.thousandSeparator:r.thousandSeparator,l=new RegExp(i,"g");o=parseFloat(a.text().replace(l,""))}var c=r.duration;r.leeway&&(c+=Math.round(r.duration*(2*Math.random()-1)*r.leeway/100));var s;if(a.attr("data-dp"))s=parseInt(a.attr("data-dp"),10);else if(null!==r.decimalPlaces)s=r.decimalPlaces;else{var d=a.text().indexOf(r.decimalPoint);s=d>-1?a.text().length-(d+1):0}a.css("counter",n),r.fade&&a.css("opacity",0),a.animate({counter:o,opacity:1},{easing:r.easing,duration:c,step:function(t){a.html(e(t*o,s))},complete:function(){a.css("counter",null),a.html(e(o,s)),r.complete&&r.complete(a)}})})}}(jQuery);
    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 700 >= e_top) {
            $('.ani_block_number').css('opacity', '1');
            $('.spincrement').spincrement({
            	from: 0,                // Стартовое число
to:1845,
                thousandSeparator: "  ",
                decimalPlaces: 0,
                leeway:20,
                easing: 'spincrementEasing',
                fade: true,      // Сколько знаков оставлять после запятой
                duration: 3000
            });


    $('.spincrement1').spincrement({
            	from: 0,                // Стартовое число
to:146,
                thousandSeparator: "  ",
                decimalPlaces: 0,
                leeway:20,
                easing: 'spincrementEasing',
                fade: true,      // Сколько знаков оставлять после запятой
                duration: 4000
            });

  $('.spincrement2').spincrement({
            	from: 0,                // Стартовое число
to:1845,
                thousandSeparator: "  ",
                decimalPlaces: 0,
                leeway:20,
                easing: 'spincrementEasing',
                fade: true,      // Сколько знаков оставлять после запятой
                duration: 5000
            });

 $('.spincrement3').spincrement({
            	from: 0,                // Стартовое число
to:18451,
                thousandSeparator: "  ",
                decimalPlaces: 0,
                leeway:20,
                easing: 'spincrementEasing',
                fade: true,      // Сколько знаков оставлять после запятой
                duration: 6000
            });

            show = false;
        }
    });
// конец анимционных чисел
//  if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {



//Ajax push mesege http://api.jquery.com/jquery.ajax/

$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
//castom code


    var $menu =  $("#my-menu").mmenu({
 "counters": true,
 drag 		: true,
pageScroll 	: {
scroll 		: true,
update		: true
},
//		         "autoHeight": true,
"extensions" : [
   "pagedim-white",
   "theme-dark",
//"popup",
//"position-back",
//"position-front",
"position-right",
 "fx-menu-slide",
 "fx-panels-slide-100",
 "fx-listitems-drop", "multiline"
]
});

var $icon = $("#my-icon");
var API = $menu.data( "mmenu" );

$icon.on( "click", function() {
   API.open();
});

API.bind( "open:finish", function() {
   setTimeout(function() {
      $icon.addClass( "is-active" );
   }, 100);
});
API.bind( "close:finish", function() {
   setTimeout(function() {
      $icon.removeClass( "is-active" );
   }, 100);
});


//end code


});


var spinner = $('.ymap-container').children('.loader');var check_if_load = false;
var myMapTemp, myPlacemarkTemp;function init () {
	var myMapTemp = new ymaps.Map("map-yandex", {
		center: [55.679133, 37.630122],
		zoom: 10,
		controls: ['zoomControl', 'fullscreenControl']
	});
	myMapTemp.events.add('click', function () {
		myMapTemp.behaviors.disable('scrollZoom');
	});
	var myPlacemarkTemp = new ymaps.GeoObject({
		geometry: {type: "Point",coordinates: [55.679133, 37.630122]
	}});
	myMapTemp.geoObjects.add(myPlacemarkTemp);
	var layer = myMapTemp.layers.get(0).get(0);
	waitForTilesLoad(layer).then(function() {
		spinner.removeClass('is-active');
	});
}
function waitForTilesLoad(layer) {
	return new ymaps.vow.Promise(function (resolve, reject) {
		var tc = getTileContainer(layer), readyAll = true;
		tc.tiles.each(function (tile, number) {
			if (!tile.isReady()) {
				readyAll = false;
			}
		});
		if (readyAll) {
			resolve();
		} else {
			tc.events.once("ready", function() {
				resolve();
			});
		}
	});
}
function getTileContainer(layer) {
	for (var k in layer) {
		if (layer.hasOwnProperty(k)) {
			if (
				layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
				|| layer[k] instanceof ymaps.layer.tileContainer.DomContainer
				) {
				return layer[k];
		}
	}
}
return null;
}
function loadScript(url, callback){
	var script = document.createElement("script");

	if (script.readyState){
		script.onreadystatechange = function(){
			if (script.readyState == "loaded" ||
				script.readyState == "complete"){
				script.onreadystatechange = null;
			callback();
		}
	};
} else {
	script.onload = function(){
		callback();
	};
}

script.src = url;
document.getElementsByTagName("head")[0].appendChild(script);
}
var ymap = function() {
	$('.ymap-container').mouseenter(function(){
		if (!check_if_load) {
			check_if_load = true;
			spinner.addClass('is-active');
			loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
				ymaps.load(init);
			});
		}
	}
	);
}
$(function() {
	ymap();
});
