$(document).ready(function(){

$(".thumbnail").on('click', function(event){
	event.preventDefault();
	$('.modal .img-responsive').attr('src', $(this).attr('href'));
	$('.modal').modal('show');
	
});

});