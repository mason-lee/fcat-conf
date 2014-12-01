$(function() {
	/*
		DON'T DELTE THIS. 
		(A little hack to make image uploading working)
	 */
	$('#biography-form').submit(function() {
		$(this).find('.avatar-input-group').detach().appendTo($(this)).hide();
	});
	/*
		In the main page, change the category nicely
	 */
	// Danny - Change the schools nicely.
	var studyElem = $(".category-study");
	studyElem.each(function() {
		var arrCategory = $(this).text().split(/\n/);
		$.each(arrCategory, function(index, value) {
			if(index === 1) {
				// console.log($(this).parent().prev());
				// var newSchools = arrCategory[index].replace(/,/g, ' | ');
			}
		});
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





















}); // end of jquery script