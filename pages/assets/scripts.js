// jQuery's equivalent to $('document').ready(function(){});
$(function(){
  // get history page
  $.get( "/infotc2600_presentation/pages/history.html", function( data ) {
    $("#history").html(data);
  });

  // get 5 steps page
  $.get( "/infotc2600_presentation/pages/5_steps.html", function( data ) {
    $("#5_steps").html(data);
  });

  // get html explained page
  $.get( "/infotc2600_presentation/pages/html_explained.html", function( data ) {
    $("#html_explained").html(data);
  });

  // get mobile web platforms page
  $.get( "/infotc2600_presentation/pages/mobile.html", function( data ) {
    $("#mobile").html(data);
  });

  // get demo page
  $.get( "/infotc2600_presentation/pages/demo.html", function( data ) {
    $("#demo").html(data);
  });
});//end document ready function
