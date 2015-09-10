$('Document').ready(function() {

// Add list item to 'To Buy'
	$( ".addbutton" ).mouseup(function () {
//  Add Validation Alert
			$(".toBuylist").append('<li><div class="textcontain"><p>'+ $(".add-bar").val() + '</p></div><button class="deletebutton" type="button">Delete</button></li>');
			$(".add-bar").val("");
	});

	$("form").submit(function(event) {
		event.preventDefault();
	});

	$(".add-bar").keyup(function(event) {
		event.preventDefault();
		if(event.keyCode == 13) {
			
			//$('.addbutton').click();
			$(".toBuylist").append('<li><div class="textcontain"><p>' + $(".add-bar").val() + '</p></div><button class="deletebutton" type="button">Delete</button></li>');
			$(".add-bar").val("");
		};
	});
	


	
// Move from Buy to Bought and back
	$(".toBuylist").on('click', 'li .textcontain', function () {
		$(this).parent().appendTo($(".bought"));
		//console.log('you clicked the buylist li');
	});

	$(".bought").on('click', 'li .textcontain', function () {
		$(this).parent().appendTo($(".toBuylist"));
	});

	// Delete Item
	$(".toBuylist").on('click', '.deletebutton', function () {
			$(this).parent().remove();
			// Won't delete added li's
		});

	$(".bought").on('click', '.deletebutton', function() {
		$(this).parent().remove();
	})

//Clear Bought Button
	$(".clearbought").mousedown(function() {
		$(this).css({"background-color":"#1a2530", "color":"white"});
	});

	$(".clearbought").mouseup(function () {
		$('.bought li').remove();
		// needs styling
		//$(this).css("background-color", "#e74c3c"); 
		$(this).removeAttr('style');
	});


//Clear All Button
	$(".clearall").mousedown(function() {
		$(this).css({"background-color":"#1a2530", "color":"white"});
	});

	$(".clearall").mouseup(function () {
		$('.list li').remove();
		$(this).removeAttr('style');
		// needs styling
	});
	if($('body').width()<500) {
		alert('winner');
	}


});

 