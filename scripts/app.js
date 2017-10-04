$(document).on("ready", function(){



$("form").on("submit", function(e) {
    e.preventDefault();

var giphy_api = "http://api.giphy.com/v1/gifs/search?";

		
		  $.ajax({
		    method: "GET",
		    url: giphy_api,
		    data: $("form").serialize(),
		    success: onSuccess,
		    error: onError
		  });
		


		function onSuccess(json) {
			for (var i=0; i<json.data.length; i++) {
			$(".gif-gallery").append('<img src="'+json.data[i].images.fixed_width_small.url+'">');
		}}

		function onError(xhr, status, errorThrown) {
			alert("Sorry, there was a problem!");
			console.log("Error: " + errorThrown);
			console.log("Status: " + status);
			console.dir(xhr);
		}

});
});	
		

