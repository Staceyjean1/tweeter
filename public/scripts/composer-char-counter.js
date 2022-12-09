$(document).ready(function () {

  $("#tweet-text").on('input', function () {
    const counter = $(this).val().length;
    console.log(counter);
    const characters = 140 - counter;
    $(".counter").text(characters);

    if (characters < 0) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "black");
    }
  });
  console.log("ready!");
});



// $("#btn").on('click', function () {
//   console.log(this); //The this keyword is a reference to the button
// });


/// max 140 characters
