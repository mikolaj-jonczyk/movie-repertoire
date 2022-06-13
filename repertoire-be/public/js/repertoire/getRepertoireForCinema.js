$(document).ready(function(){
  $.getScript("js/helpers/getUrlParameter.js", function() {  
    $.getScript("js/helpers/dateHelper.js", function() {
      var id = getUrlParameter('id');
      var $repertoireForCinema = $('#repertoireForCinema');

      $.ajax({
          type: "GET",
          url: 'http://localhost:3000/repertoire/cinema/' + id,
          contentType : 'application/javascript',
          success: function(repertoires) {
            $.each(repertoires, function(i, repertoire) {
              $repertoireForCinema.append("<tr><td>"+ repertoire.name +"</td><td>"+ setDateFormat(repertoire.data) +"</td></tr>"
          )});
      }});
    });
  });
});



