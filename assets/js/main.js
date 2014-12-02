$(function() {
	/*
		DON'T DELTE THIS. 
		(A little hack to make image uploading working)
	 */
	$("#form-submit-button").prop('disabled', true);
	$("#form-submit-button").css({ "backgroundColor": "#cccac9" });

	$('#biography-form').submit(function() {
		$(this).find('.avatar-input-group').detach().appendTo($(this)).hide();
		// $(this).find('.avatar-input-group').detach().appendTo($(this));
	});

	$(".ad-lib-file").change(function() {
		if($(this).val()) {
			$("#form-submit-button").prop('disabled', false);
			$("#form-submit-button").css({ "backgroundColor": "rgba(207, 73, 74, 0.9)" });
		}
	});

	
	//In the main page, change the category nicely
	// Change the schools texts nicely.
	var studyElem = $(".category-study");
	studyElem.each(function() {
		var currentMajor1 = $(this).html().replace(/-/g, ' ');
		var currentMajor2 = currentMajor1.replace(/,/g, ' | ');
		$(this).empty();
		$(this).append(currentMajor2);
	});
	
	// Remove all "," from classes of ".post" elements
	$('.post').each(function() {
		var _sCurrClasses = $(this).attr('class');
		$(this).attr('class', _sCurrClasses.replace(/,/g, ' '));
	});

	/*
		Text formatting in the modal
	 */
	// e.g., Alumni,student....
	var modalTitle = $(".title-modal");
	modalTitle.each(function() {
		var newModalTitle = $(this).html().replace(/,/g, ' and ');
		$(this).empty();
		$(this).append(newModalTitle);
	});
	// e.g., Music,Theatre-Production and Design......
	var modalPrograms = $(".programs-modal");
	modalPrograms.each(function() {
		var modalPrograms1 = $(this).html().replace(/-/g, ' ');
		var modalPrograms2 = modalPrograms1.replace(/,/g, ', ');
		$(this).empty();
		$(this).append(modalPrograms2);
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
				// $('#biography-form').find('.avatar-input-group').detach().appendTo($(this)).hide();
			}
		}
	});

	$.validator.methods.url = function(value, element) {
	    return this.optional(element) || true;
	};

	$.validator.addMethod("isurl",function(value,element) {
	  return this.optional(element) 
	     || /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(value); 
	},"Proper URL, please");

	// var peopleSize = $(".people-wrapper .post").length;
	// var numPic = 18;

	// $('.people-wrapper .post:lt('+numPic+')').show();
	// $("#loadMore").click(function() {
	//	numPic = (numPic + 5 <= peopleSize) ? numPic + 5 : peopleSize;
	//	$('.people-wrapper .post:lt('+numPic+')').show();
	// });
	// $("#showLess").click(function() {
	//	numPic = (numPic - 5 < 0) ? 3 : numPic - 5;
	//	$(".people-wrapper .post").not(':lt('+numPic+')').hide();
	// });

	/*
		Hide header border on the index page.
	 */
	if ($(".stories-wrapper").length > 0) {
		$(".header-border").css({ "border-bottom": "none" });
	}

	/*
		Responsive menu
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
	/*
		Dealing with sub filters
	 */
	$(".subfilterButton").click(function() {
		$(".subfilter input[type='checkbox']:checked").each(function() {
			$(".schoolOfContemp").append("," + $(this).val());
		});
	});
	// Initiate chosen library
	$(".chosen-select").chosen();

	// Danny - How to show different dropdown depending on the selection.
	// contemporary art subfilter
	$("#source").change(function() {
		if($('#source option:selected').text() == "Contemporary Arts") {
			console.log("contemporary arts = ")
			console.log($("#source option:selected").text());
			$(".major-art").show();
			$(".chosen-container").css({ "width": "350px" });
		} 
		else if ($('#source option:selected').text() == "Communication") {
			console.log("communications = ")
			console.log($("#source option:selected").text());
			$(".major-communication").show();
			$(".chosen-container").css({ "width": "350px" });
		}  
	});

	$("#title-chooser").change(function(){
		 values = $("#title-chooser").chosen().val();
		 //values is an array containing all the results.
		 // console.log(values);

		 if (!$.inArray("Alumni", values)) {
		 	$("#alumni-info").slideDown();
		 }
		 else {
		 	$("#alumni-info").slideUp();
		 }
	});

}); // end of jquery script