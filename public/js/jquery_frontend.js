$( document ).ready(function() {

    $( "#login" ).click(function( event ) {

        alert( "Thanks for visiting!" );

    });

$.getJSON("menu.json", function(res) {
  // Log each key in the response data
  $.each(res, function(key,value) {
    console.log(key + " : " + value);
  });
});

});