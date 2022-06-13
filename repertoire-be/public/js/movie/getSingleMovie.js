$(document).ready(function(){
  $.getScript("js/helpers/getUrlParameter.js", function() {
    var id = getUrlParameter('id');
    var $singleMovie = $('#singleMovie');

    $.ajax({
        type: "GET",
        url: 'http://localhost:3000/movie/' + id,
        contentType : 'application/javascript',
        success: function(movie) {
          $singleMovie.append("<div class='container'> \
          <h3 class='rounded bg-dark text-white p-4'>"+ movie.name +"</h3>\
            <div class='row'> \
              <div class='col-sm p-3'> \
                <h5 style='text-decoration: underline;'>Description </h5>\
                <p style='font-size: 0.8rem;'>" + movie.description + "</p> \
              </div> \
              <div class='col-sm'> \
                <div class='container p-3'> \
                  <ul class='list-group'> \
                    <h5 style='text-decoration: underline;'>Actors </h5>\
                    <p style='font-size: 0.8rem;'>" + movie.actors + "</p> \
                  </ul> \
                </div> \
                <div class='container p-3'>\
                  <ul class='list-group'> \
                    <h5 style='text-decoration: underline;'>Director </h5>\
                    <p style='font-size: 0.8rem;'>" + movie.director + "</p> \
                  </ul>\
                </div>\
              </div>\
              <div class='col-sm p-4'>\
                <img src='"+ movie.image +"' class='rounded float-center img-responsive' style='width: 50%'/>\
              </div>\
            </div>\
        </div>"
        )},
        error: function() {
          $('#error').show();
          $('#repertoire-section').hide();
          $('#movie-section').hide();
        },
        timeout: 1000   
    });
  });
});

