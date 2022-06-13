$(document).ready(function(){
  var $cinemas = $('#select-cinema');

  $.ajax({
      type: "GET",
      url: 'http://localhost:3000/cinemas',
      contentType : 'application/javascript',
      success: function(cinemas) {
          $.each(cinemas, function(i, cinema) {
            $cinemas.append("<option id='"+ cinema.id + "'>" + cinema.name + "</option>");
          });
      }
  });
});