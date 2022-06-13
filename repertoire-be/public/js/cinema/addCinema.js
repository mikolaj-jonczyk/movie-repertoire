$( function(){

  var $name = $('#name');
  var $address = $('#address');
  var $email = $('#email');
  var $mobile = $('#mobile');

  $('#add').on('click', function(){
   let movie = {
      name: $name.val(),
      address: $address.val(),
      email: $email.val(),
      mobile: $mobile.val(),
    }

    let jsonString = JSON.stringify(movie);
    
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/addCinema',
      data: jsonString,
      contentType: "application/json",
      dataType: "json",
      success: function(){

      },
      error: function(){

      }
    });   
  });
});

