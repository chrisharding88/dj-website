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
	var firstName = $(".f_name").find("input").val();
	var lastName = $(".l_name").find("input").val();
	var email = $(".e-mail").find("input").val();
	var pPhone = $(".primary-phone").find("input").val();
	var sPhone = $(".secondary-phone").find("input").val();
	var message = $(".message").find("textarea").val();

$(function () {
	//Get the form
	var form = $('#email-form');

	// Get the messeages div
	var formMessages=$('#form-messages')
};

//Serialize the form data

var formData = $("form").serialize();

// Submit the form using AJAX
	$.ajax({
		type:"POST",
		url: $("form").attr('action'),
		data: formData;

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