$(window).load(function() {
	/*
		A little hack to make image uploading working
	 */
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

	// change the text of the shareability
	var share = [];
	$(".shareability").each(function() {
		share.push($(this).text().trim());
	});
	console.log(share);

	var shareElement = [];
	$(".shareability").each(function() {
		shareElement.push($(this));
	});

	$.each(share, function(key) {
		if(share[key] == "false"){
			var okay = share[key].replace("false", "Okay");
			shareElement[key].html(okay);	
		}
		else {
			var no = share[key].replace("true", "No");
			shareElement[key].html(no);	
		}
	});


	/*
		Remove all "," from classes of ".post" elements
	 */
	$('.post').each(function() {
	    var _sCurrClasses = $(this).attr('class');
	    $(this).attr('class', _sCurrClasses.replace(/,/g, ' '));
	});
	/*
		Slide in the flash message.
	 */
	$(".thankyou-message-wrapper").css({opacity: 0});
	$(window).load(function() {
		$(".thankyou-message-wrapper").addClass("animated fadeInRight");
		setTimeout(fadeOutMessage, 4000);
		function fadeOutMessage() {
			$(".thankyou-message-wrapper").removeClass("fadeInRight").addClass("fadeOut");
		}
	});
	
	$("error-message-wrapper").css({opacity: 0});
	$(window).load(function() {
		$(".error-message-wrapper").addClass("animated fadeInDown");
		setTimeout(fadeOutErrorMessage, 3000);
		function fadeOutErrorMessage() {
			$(".error-message-wrapper").removeClass("fadeInDown").addClass("fadeOut");
		}
	});

	$('.myModal').modal('toggle');
}); // end of jquery script



















