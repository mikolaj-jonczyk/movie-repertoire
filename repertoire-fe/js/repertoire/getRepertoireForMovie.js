$(document).ready(function(){
  $.getScript("js/helpers/getUrlParameter.js", function() {
    $.getScript("js/helpers/dateHelper.js", function() {
      var id = getUrlParameter('id');
      var $repertoireForMovie = $('#repertoireForMovie');

      $.ajax({
          type: "GET",
          url: 'http://localhost:3000/repertoire/movie/' + id,
          contentType : 'application/javascript',
          success: function(repertoires) {
            $.each(repertoires, function(i, repertoire) {
              $repertoireForMovie.append("<tr><td>"+ repertoire.name +"</td><td>"+ setDateFormat(repertoire.data) +"</td></tr>"
          )});
      }});
    });
  });
});




