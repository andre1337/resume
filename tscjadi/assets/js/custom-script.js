jQuery(document).ready(function ($) {
 "use strict";

// 
//----------------------------------
 
//wow js active
//----------------------------------
 new WOW().init();
 
/*-------------------------
jQuery Page Loader
--------------------------*/
$("#loading").delay(2000).fadeOut(500);

//js scrollup
//----------------------------------
$.scrollUp({
	scrollText: '<i class="fa fa-angle-up"></i>',
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade'
}); 

//isotope activation 	
//=================
$('#container').imagesLoaded(function () {
	// filter items on button click
	$('.filtering-button').on('click', 'a', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
	$('.filtering-button').on('click', 'a', function () {
		$('.filtering-button a').removeClass('active');
		$(this).addClass('active');
	});
	var $grid = $('.grid').isotope({
		// set itemSelector so .grid-sizer is not used in layout
		itemSelector: '.grid-item',
		percentPosition: true,
		animationOptions: {
			duration: 500,
			easing: 'zoom-in'
		},
		masonry: {
			// use element for option
			columnWidth: '.grid-item'
		},
		transitionDuration: '.9s'
	})
});

//   progress bar
   
$('.skills-list').appear(function() {
	$('#demoprogressbar1').LineProgressbar({
		percentage: 80,
		fillBackgroundColor: '#4cb050',
		backgroundColor: '#1b1b1b',
		height: '10px',
		radius: '6px',

	});
	$('#demoprogressbar2').LineProgressbar({
		percentage: 90,
		fillBackgroundColor: '#8bc24a',
		backgroundColor: '#1b1b1b',
		height: '10px',
		radius: '6px',
	});
	$('#demoprogressbar3').LineProgressbar({
		percentage: 60,
		fillBackgroundColor: '#ff9700',
		backgroundColor: '#1b1b1b',
		height: '10px',
		radius: '6px',
	});
	$('#demoprogressbar4').LineProgressbar({
		percentage: 80,
		fillBackgroundColor: '#ff7800',
		backgroundColor: '#1b1b1b',
		height: '10px',
		radius: '6px',
	});
	$('#demoprogressbar5').LineProgressbar({
		percentage: 50,
		fillBackgroundColor: '#fe5722',
		backgroundColor: '#1b1b1b',
		height: '10px',
		radius: '6px',
	});
	
  });

  /*----------------------------
  smoot scroll nav
  ------------------------------ */  
$("#nav").onePageNav({
	scrollOffset:90
  });
/*--------------------------
jquery Sticky Header
---------------------------- */
$(window).on('scroll', function(){
	if( $(window).scrollTop()>80 ){
		$('#sticky').addClass('stick');
	} else {
		$('#sticky').removeClass('stick');
	}
	}); 





}); 