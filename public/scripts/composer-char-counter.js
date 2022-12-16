$(document).ready(function () { 
        
  $("#tweetser-text").on('input', function () {
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




// $(document).ready(function() {
//   // --- our code goes here ---
//   console.log("Say Hello to my Little Friend");
//   $("#tweeter-text").on("input", function() {
//     const maxLimit = 140;
//     let characterCount = $(this).val().length;
//     let textFromUser = $(this).val();
//     let remaining = maxLimit - characterCount;
//     console.log(remaining);
//     const safeHTML = `<p>${escape(textFromUser)}</p>`;

//     let $counterButton = $(this).parent().find(".counter");
//     $counterButton.val(remaining);

//     if (remaining < 0) {
//       $counterButton.addClass("redText");
//     } else if (remaining > 0) {
//       $counterButton.removeClass("redText");
//     }
//   });
// });
// $("#btn").on('click', function () {
//   console.log(this); //The this keyword is a reference to the button
// });


// / max 140 characters
