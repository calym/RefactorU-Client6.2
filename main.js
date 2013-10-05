$(document).ready(function() {

	$(".name").click(function() {
	   $(".name").hide();  
	});	 	

	$(".namebtn").click(function() {
	 $(".name").text($(".nameinput textarea").val());
	 	$(".name").show();
	 	    
	});		   	

	$(".bio").click(function() {
	   $(".bio").hide();  
	});	 	


	$(".biobtn").click(function() {
	 $(".bio").text($(".bioinput textarea").val());
	 	$(".bio").show();
	 	    
	});		   		

 });//this closes document ready


