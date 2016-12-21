$(".burger").on("click" , function() {
 	$("nav").toggleClass("open");
})

$( window ).resize(function() {
	if ($(window).width() > 767 ) {
 		$("nav").removeClass("open");
 	}
})

var slider = new IdealImageSlider.Slider({
    selector: '#slider',
    height: 400,
    interval: 4000
});
slider.addCaptions();
slider.start();