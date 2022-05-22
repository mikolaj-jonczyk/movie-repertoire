$('#search-button').click(function(){
  var $cinemas = $('#cinemas');
  $.ajax({
    type: "GET",
    url: 'http://localhost:3000/cinema/name/' + $("#search-text").val(),
    contentType : 'application/javascript',
    success: function(filterdCinemas) {
      $cinemas.empty();
      if (filterdCinemas.length === 0) {
         $cinemas.append("<div class='container'><h2 style='text-align:center;'>Sorry there is no such cinema!</h2></div>") 
      } else {
        $.each(filterdCinemas, function(i, cinema) {
          $cinemas.append("<li class='list-group-item border-0'><a id='"+ cinema.id + "' onclick='openSingleCinema(this.id)' \
          href='#' style='text-decoration: none;'> \
          <h2 class='rounded bg-dark text-white p-4'>" + cinema.name + "</h2></a>\
          <div class='container'> \
            <div class='row'> \
              <div class='col-sm p-3'> \
                <h5 style='text-decoration: underline;'>Address </h5> \
                <p style='font-size: 0.8rem;'>" + cinema.address + "</p> \
              </div> \
              <div class='col-sm'> \
                <div class='container p-3'> \
                  <ul class='list-group'> \
                    <h5 style='text-decoration: underline;'>E-mail </h5> \
                  <p style='font-size: 0.8rem;'>" + cinema.email + "</p> \
                  </ul> \
                </div> \
                </div> \
                <div class='col-sm'> \
                <div class='container p-3'>\
                  <h5 style='text-decoration: underline;'>Number </h5> \
                  <p style='font-size: 0.8rem;'>" + cinema.mobile + "</p> \
                  </div> \
                  </ul>\
                  </div> \
                </div>\
              </div>\
            </div>\
          </div> \
        </li>"
    )});
  }}});
});