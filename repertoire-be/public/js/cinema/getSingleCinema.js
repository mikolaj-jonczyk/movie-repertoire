$(document).ready(function(){
  $.getScript("js/helpers/getUrlParameter.js", function() { 
    var id = getUrlParameter('id');
    var $singleCinema = $('#singleCinema');

    $.ajax({
        type: "GET",
        url: 'http://localhost:3000/cinema/' + id,
        contentType : 'application/javascript',
        success: function(cinema) {
          $singleCinema.append("<h2 class='rounded bg-dark text-white p-4'>" + cinema.name + "</h2></a>\
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
          </div>"
        )},
        error: function() {
          $('#error').show();
          $('#repertoire-section').hide();
          $('#cinema-section').hide();
        },
        timeout: 1000 
    });
  });
});

