"use strict"

$('.response').click(function() {
	display((this).id);
	$('.response').each(function () {
		$(this).css("background-color", "#eee");
	});
	$(this).css("background-color", "#ddd");
});

function display(id) {
	//hide currently displayed response
	$('#responsearea').fadeOut();
	setTimeout(function () {
		$('#responsewrapper').empty();
		//show selected response
		$('#responsewrapper').append(responses[id].essayText);
		$('#responsearea').fadeIn();
	}, 400);
}