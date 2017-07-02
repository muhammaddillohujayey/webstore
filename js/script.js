$(function(){
	$('.carousel').carousel({
	  interval: 3000
	});

	$('.search').on('click',function(){
		$('.main-menu .navbar-form').slideToggle();
	});
});

$(window).load(function(){
	$('#elastislide').elastislide();
	
	var carouselCaptionWidth = $("#carousel-sidebar .active img").width();
	$("#carousel-sidebar img").each(function(){
		$(this).attr('width', carouselCaptionWidth);
	});
	$('#carousel-sidebar .sidebar-carousel-caption').css('max-width', carouselCaptionWidth + 'px'); 
	$('#carousel-sidebar .carousel-indicators').css('max-width', carouselCaptionWidth + 'px'); 
	$('.sidebar .baner').css('max-width', carouselCaptionWidth + 'px'); 
});


var products = document.getElementsByClassName('product');
for (var i = 0; i < products.length; i++) {
		products[i].addEventListener('mouseover', my_func, false);
		products[i].addEventListener('mouseleave', my_func2, false);
}

function my_func() {
var res = this.firstElementChild;
var www = window.getComputedStyle(res, null).getPropertyValue("display");
if (www = 'none') {
	res.style.display = 'block';}
}

function my_func2() {
var res = this.firstElementChild;
if (res.style.display = 'block') {
	res.style.display = 'none';}
}
