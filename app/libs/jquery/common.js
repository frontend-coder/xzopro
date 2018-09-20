$(document).ready(function() {
	$("body").niceScroll({
horizrailenabled:false
});
// вверхнее красиво-вращающееся меню
// 1 и 2 строка это анимация крестика
//3 строка - слайдер вниз меню
//слайдер вниз меню отвечает за работу мобильного меню к переносу
$(".toggle-mnu").click(function() {
$(this).toggleClass("on");
$(".top-menu").slideToggle();
return false;
});
$('body, .top-menu ul li a').click(function () {
$('.hidden-mnu').hide("slow");
});

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



// код подключения плагина Vertical-Horizontal-Tabs
  // $('#verticalTab').jqTabs();

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