$(document).ready(function(){
  var $movies = $('#select-movie');

  $.ajax({
      type: "GET",
      url: 'http://localhost:3000/movies',
      contentType : 'application/javascript',
      success: function(movies) {
          $.each(movies, function(i, movie) {
            $movies.append("<option id='"+ movie.id + "'>" + movie.name + "</option>");
          });
      }
  });
});