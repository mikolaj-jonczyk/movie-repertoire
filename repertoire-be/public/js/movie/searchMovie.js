$('#search-button').click(function(){
  var $movies = $('#movies');
  $.ajax({
    type: "GET",
    url: 'http://localhost:3000/movie/name/' + $("#search-text").val(),
    contentType : 'application/javascript',
    success: function(filterdMovies) {
      $movies.empty();
      if (filterdMovies.length === 0) {
        $movies.append("<div class='container'><h2 style='text-align:center;'>Sorry there is no such movie!</h2></div>") 
      } else {
        $.each(filterdMovies, function(i, movie) {
          $movies.append("<li class='list-group-item border-0'><a id='"+ movie.id + "' onclick='openSingleMovie(this.id)' \
          href='#' style='text-decoration: none;'><h2 class='rounded bg-dark text-white p-4'>" + movie.name + "</h2></a>\
         <div class='container'> \
           <div class='row'> \
             <div class='col-sm p-3'> \
             <h5 style='text-decoration: underline;'>Description</h5> \
               <p style='font-size: 0.8rem;'>" + movie.description + "</p> \
             </div> \
             <div class='col-sm'> \
               <div class='container p-3'> \
                 <ul class='list-group'> \
                 <h5 style='text-decoration: underline;'> Actors </h5> \
                 <p style='font-size: 0.8rem;'>" + movie.actors + "</p> \
                 </ul> \
               </div> \
               <div class='container p-3'>\
                 <ul class='list-group'> \
                 <h5 style='text-decoration: underline;'> Director </h5> \
                 <p style='font-size: 0.8rem;'>" + movie.director + "</p>\
                 </ul>\
               </div>\
             </div>\
             <div class='col-sm p-4'>\
               <img src='"+ movie.image +"' class='rounded float-center img-responsive' style='width: 40%'/>\
             </div>\
           </div>\
         </div> \
       </li>"
    )});
  }}});
});