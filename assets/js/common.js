/**
    This website created and maintained by Level7.
    Author : Level 7
    Website: www.level7.in
    Contact: 9500151312
*/

var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
	if(supportsTouch==true){
		$('html').addClass('touch')
	}else{
		$('html').addClass('no-touch')
	}