$(function() {
	/**
	 *  Alert message hide once the user click the x button
	 */
	// $("[data-hide]").on("click", function() {
	// 	$("." + $(this).attr("data-hide")).hide();
	// });


	// init Isotope
	// var $container = $('.project-wrapper').isotope({
	// 	itemSelector: '.element-item',
	// 	layoutMode: 'fitRows'
	// });
	// // filter functions - These exists for more advanced features but 
	// 	// you don't need to declare anything in this function.
	// var filterFns = {
		
	// };
	// // bind filter button click
	// $('#filters').on( 'click', 'button', function() {
	// 	var filterValue = $( this ).attr('data-filter');
	// 	// use filterFn if matches value
	// 	filterValue = filterFns[ filterValue ] || filterValue;
	// 	$container.isotope({ filter: filterValue });
	// });
	// // change is-checked class on buttons
	// $('.button-group').each( function( i, buttonGroup ) {
	// 	var $buttonGroup = $( buttonGroup );
	// 	$buttonGroup.on( 'click', 'button', function() {
	// 		$buttonGroup.find('.is-checked').removeClass('is-checked');
	// 		$( this ).addClass('is-checked');
	// 	});
	// });


	// Masonry dynamic column grid
	var $container = $('.featured-people-wrapper');
	// initialize
	$container.masonry({
		itemSelector: '.post'
	});
	
}); // end of jquery script





