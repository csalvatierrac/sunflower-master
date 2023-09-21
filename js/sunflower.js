$(document).ready(function() {
    $(".container").delay(500).fadeIn("slow");
    // expanding bar. Start this first
    $("#hbar").addClass("after");
    $("#hbar").delay(300).animate( {
      width: '60%'
    }, 2000); // end animate
    
    // scrolling text. Then start the scrolling text
    thisText="Hello there!";
    var arr = thisText.split("");
    $("#readout").text("");
    $.each(arr, function(index,value) {
      if (value != "") {
        $("#readout").delay(150).fadeIn("slow", function(){
        $("#readout").append(value); 
        });
      }
    }); // end each
    $(".container").delay(1800).fadeOut("slow");
    //flower animation
    $(".petal-top").delay(3000).animate({
   opacity:'1',
   width:'115px',
   height: '110px',
  }, 500).css("background","#ffa700");  
  $(".petal-r2").delay(3300).animate({
    opacity:'1'
  }, 500);
   $(".petal-r3").delay(3800).animate({
    opacity:'1',
     width: '115px',
     height: '110px',
  }, 500).css("background","#ffa700");
   $(".petal-r4").delay(4300).animate({
    opacity:'1'
  }, 500);
   $(".petal-l4").delay(4800).animate({
    opacity:'1',
     width:'115px',
     height: '110px',
  }, 500).css("background","#ffa700");
   $(".petal-l3").delay(5300).animate({
    opacity:'1'
  }, 500);
   $(".petal-bottom").delay(5800).animate({
     opacity:'1',
     width:'115px',
     height: '110px',
  }, 500).css("background","#ffa700");
   $(".petal-l2").delay(6300).animate({
    opacity:'1'
  }, 500);
   $(".petal-l1").delay(6800).animate({
    opacity:'1',
     width:'115px',
     height: '110px',
  }, 500).css("background","#ffa700");
   $(".petal-r1").delay(7300).animate({
    opacity:'1'
  }, 500);
   $(".center").delay(7800).animate({
    opacity:'1'
  }, 500);
  $(".quote1").delay(8300).animate({
    opacity:'1'
  }, 1000);
   $(".quote2").delay(9600).animate({
    opacity:'1'
  }, 1000);
});