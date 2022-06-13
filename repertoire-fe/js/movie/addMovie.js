$( function(){

  var $name = $('#name');
  var $description = $('#description');
  var $actors = $('#actors');
  var $director = $('#director');
  var $image = $('#image');

  $('#add').on('click', function(){
   let movie = {
      name: $name.val(),
      description: $description.val(),
      actors: $actors.val(),
      director: $director.val(),
      image: $image.val()
    }

    let jsonString = JSON.stringify(movie);
    
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/addMovie',
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

