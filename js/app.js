$('Document').ready(function() {

// Add list item to 'To Buy'
	$( ".addbutton" ).mouseup(function () {
//  Add Validation Alert
			$(".toBuylist").append('<li><div class="textcontain"><p>'+ $(".add-bar").val() + '</p></div><button class="deletebutton" type="button">Delete</button></li>');
			$(".add-bar").val("");
	});


	
// Delete Item
	$(".deletebutton").click(function () {
			$(this).parent().remove();
			// Won't delete added li's
		});

// Move from Buy to Bought and back
	$(".toBuylist li").click(function () {
		$(this).appendTo($(".bought"));
	});

	$(".bought li").click(function () {
		$(this).appendTo($(".toBuylist"));
	});

//Clear Bought Button
	$(".clearbought").mousedown(function() {
		$(this).css({"background-color":"#1a2530", "color":"white"});
	})

	$(".clearbought").mouseup(function () {
		$('.bought li').remove();
		// needs styling
		//$(this).css("background-color", "#e74c3c"); 
		$(this).removeAttr('style');
	});


//Clear All Button
	$(".clearall").mousedown(function() {
		$(this).css({"background-color":"#1a2530", "color":"white"});
	})

	$(".clearall").mouseup(function () {
		$('.list li').remove();
		$(this).removeAttr('style');
		// needs styling
	});



})

 