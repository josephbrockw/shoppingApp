$('Document').ready(function() {

// Add list item to 'To Buy'
	$( ".addbutton" ).mouseup(function () {
//  Add Validation Alert
			$(".toBuylist").append('<li><div class="textcontain"><p>'+ $(".add-bar").val() + '</p></div><button class="deletebutton" type="button">Delete</button></li>');
			$(".add-bar").val("");
	});


	
// Delete Item
	$(".deletebutton").mouseup(function () {
		alert('on the right track');
	})



})

 