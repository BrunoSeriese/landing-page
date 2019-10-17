var x = document.getElementById("triggerB");

x.addEventListener("click", function() {

 $(".container--2").toggleClass("visible");
 $(".container--3").toggleClass("invisible");

 $(".heading__top").toggleClass("white");
  $(".heading__middle").toggleClass("no-display");
   $(".heading__bottom").toggleClass("no-display");
});


var y = document.getElementById("triggerA");

y.addEventListener("click", function() {

  $(".container--3").toggleClass("visible");
  $(".container--2").toggleClass("invisible");

  $(".heading__top").toggleClass("no-display");
   $(".heading__middle").toggleClass("no-display");
    $(".heading__bottom").toggleClass("black");

});
