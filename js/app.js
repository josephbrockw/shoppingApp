$('Document').ready(function() {

// Add list item to 'To Buy'
	$( ".addbutton" ).mouseup(function () {
//  Add Validation Alert
			$(".toBuylist").append('<li><div id="textcontain"><p>' + $(".add-bar").val() + '</p></div><button type="button">Delete</button></li>');
			$(".add-bar").val("");
	});
// Delete Item
	$(".toBuylist li button").mouseup(function () {
		alert('on the right track');
	})



})