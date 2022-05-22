$(document).ready(function(){
  var $cinemas = $('#cinemas');

  $.ajax({
      type: "GET",
      url: 'http://localhost:3000/cinemas',
      contentType : 'application/javascript',
      success: function(cinemas) {
          $.each(cinemas, function(i, cinema) {
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
      }
  });
});