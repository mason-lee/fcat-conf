$(function() {
	/*
		DON'T DELTE THIS. 
		(A little hack to make image uploading working)
	 */
	$('#biography-form').submit(function() {
		$(this).find('.avatar-input-group').detach().appendTo($(this)).hide();
	});

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
			var no = share[key].replace("undefined", "No");
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
	$(".thankyou-message-wrapper").addClass("hide");
	$(".thankyou-message-wrapper").delay(5000).removeClass("hide").addClass("animated fadeInDown");
	$(".glyphicon-remove").click(function() {
		$(this).parent("div").addClass("fadeOutUpBig remove-message hide");
		$(this).parent("div").removeClass("animated");
	});

	$(window).load(function() {
		$(".error-message-wrapper").addClass("animated fadeInDown");
		setTimeout(fadeOutErrorMessage, 3000);
		function fadeOutErrorMessage() {
			$(".error-message-wrapper").removeClass("fadeInDown").addClass("fadeOut");
		}
	});

	$('.myModal').modal('toggle');

	$("#biography-form").validate({
		rules: {
			firstName: {
				required: true
			},
			lastName: {
				required: true
			},
			email: {
				required: true
			},
			location: {
				required: true
			},
			avatar: {
				required: true
			},
			categories: {
				required: true
			},
			shareFcat: {
				required: true
			},
			success: function(element) {
				element.text("OK!").addClass('valid');
				/*
					Attach photo field should be the last element in the multi-part form...so just do that but hide it.
				*/
				$('#biography-form').find('.avatar-input-group').detach().appendTo($(this)).hide();
			}
		}
	});

	// var peopleSize = $(".people-wrapper .post").length;
	// var numPic = 18;

	// $('.people-wrapper .post:lt('+numPic+')').show();
	// $("#loadMore").click(function() {
	// 	numPic = (numPic + 5 <= peopleSize) ? numPic + 5 : peopleSize;
	// 	$('.people-wrapper .post:lt('+numPic+')').show();
	// });
	// $("#showLess").click(function() {
	// 	numPic = (numPic - 5 < 0) ? 3 : numPic - 5;
	// 	$(".people-wrapper .post").not(':lt('+numPic+')').hide();
	// });

	/*
		Hide header border on the index page.
	 */
	if ($(".stories-wrapper").length > 0) {
		$(".header-border").css({ "border-bottom": "none" });
	}

	/*
		Responsive meny
	 */
	$('header nav').meanmenu();

	/*
		Auto resize the textarea
	 */
	$('.form-group').on( 'keyup', 'textarea', function (){
		$(this).height(0);
		$(this).height(this.scrollHeight);
	});
	$('#container').find( 'textarea' ).keyup();
}); // end of jquery script



















