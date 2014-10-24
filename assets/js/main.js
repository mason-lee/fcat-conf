$(function() {
	/**
	 *  Alert message hide once the user click the x button
	 */
	$("[data-hide]").on("click", function() {
		$("." + $(this).attr("data-hide")).hide();
	});
})