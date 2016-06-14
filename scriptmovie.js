$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
    var formData = {
      't'              : $('input[name=t]').val(),
    };
    $.ajax({   
      url: "http://www.omdbapi.com/?",  
      data: formData,
       dataType: "json",   
       success: function(response) {     
        console.log(response);
        $("#movie-title").html(response.Title);  
        $("#poster").attr("src", response.Poster);   
      } 
    });
  });
});
