$('Document').ready(function() {

// Add list item to 'To Buy'
	$( ".addbutton" ).mouseup(function () {
//  Add Validation Alert
			$(".toBuylist").append('<li><div class="textcontain"><p>'+ $(".add-bar").val() + '</p></div><button class="deletebutton" type="button">Delete</button></li>');
			$(".add-bar").val("");
	});


	
// Delete Item
	$(".deletebutton").mouseup(function () {
			$('.list li>this').remove();
			// alert('on the right track');
		})


//Clear Bought Button
	$(".clearbought").mousedown(function() {
		$(this).css("background-color", "blue");
	})
	
	$(".clearbought").mouseup(function () {
		$('.bought li').remove();
		// needs styling
		$(this).css("background-color", "#e74c3c"); 
	});


//Clear All Button
	$(".clearall").mouseup(function () {
		$('.list li').remove();
		// needs styling
	});



})

 