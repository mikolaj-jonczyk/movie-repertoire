$( function(){
  $('#add').on('click', function(){

    var $movie_id = $('#select-movie').find(":selected").attr('id');
    var $cinema_id = $('#select-cinema').find(":selected").attr('id');
    var $data = $('#data');
   let repertoire = {
      movie_id: parseInt($movie_id),
      cinema_id: parseInt($cinema_id),
      data: $data.val(),
    }

    let jsonString = JSON.stringify(repertoire);
    
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/addRepertoire',
      data: jsonString,
      contentType: "application/json",
      dataType: "json",
      success: function(data){
        console.log(data);
      },
      error: function(){
        console.log('there was some issue');
        console.log(jsonString);
      }
    });   
  });
});

