$(document).ready(function(){

/* GALLERY PAGE */
$(".thumbnail").on('click', function(event){
	event.preventDefault();
	$('.modal .img-responsive').attr('src', $(this).attr('href'));
	$('.modal').modal('show');
	console.log(event);
});

/*CONTACT PAGE */

$("#email-form").submit(function(event){
	event.preventDefault();
	var firstName = document.getElementByClass(".f_name");
	var lastName = document.getElementByClass(".l_name");
	var email = document.getElementByClass(".e-mail");
	var pPhone = document.getElementByClass(".primary-phone");
	var sPhone = document.getElementByClass(".secondary-phone");
	var message = document.getElementByClass(".message");

 $(function () {
	//Get the form
	 	if (firstName.value === ''){
	 		alert ("Please enter your first name!")
	 		return false;
	 	}

	 	if (lastName.value === ''){
	 		alert ("Please enter your last name!")
	 		return false;
	 	}
	 	if (email.value === ''){
	 		alert ("Please enter your email adress!")
	 		return false;
	 	}

	 	if (pPhone.value === ''){
	 		alert ("Please enter your primary phone number!")
	 		return false;
	 	}
	 	
	 	if (message.value === ''){
	 		alert ("Please write your message!")
	 		return false;
	 	}

	
 });

//Serialize the form data

var formData = $("form").serialize();
debugger;
// Submit the form using AJAX
	$.ajax({
		type:"POST",
		url: $("form").attr('action'),
		data: formData

	}).done(function(response){
		$(formMessages).removeClass('error');
		$(formMessages).removeClass('success');

		// Set the message text
		$(formMessages).text(response);

		//Clear the form.
		$(".f_name").val('')
		$(".l_name").val('')
		$(".e-mail").val('')
		$(".primary-phone").val('')
		$(".secondary-phone").val('')
		$(".message").val('')

	}).fail(function(data){
		// Make sure that the formMessages div has the 'error' class.
		$(formMessages).removeClass('success');
		$(formMessages).removeClass('error');

		// Set the message text.

		if (data.responseText !==''){
			$(formMessages).text(data.responseText);
		} else{
			$(formMessages).text('Opps! An error occured!')
		}
	});



});






});