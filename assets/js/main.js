$(function() {

	$('#biography-form').submit(function() {
		$(this).find('.avatar-input-group').detach().appendTo($(this)).hide();
	})

	// init Isotope
	var $container = $('.featured-people-wrapper').isotope({
		itemSelector: '.element-item'
	});

	$('#filters').on('click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
    		$container.isotope({ filter: filterValue });
	});

	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on('click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		});
	});

}); // end of jquery script





