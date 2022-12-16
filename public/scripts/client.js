
$(document).ready(function() {



  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  /* Your code for creating the tweet element */
  const renderTweets = function(tweets) {
    $("#tweets-container").empty();
    // tweets = data
    console.log('render tweets');
    console.log(tweets);
    // loops through tweets
    for (let tweet of tweets) {
      // calls createTweetElement for each tweet
      let createATweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $("#tweets-container").prepend(createATweet);
    }


  };

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    let $tweet = `
<article class="tweet">
  <header>
    <div>
      <img src=${tweet.user.avatars} width="60px"
        alt="">
      <p>${tweet.user.name}</p>
    </div>
    <p>${tweet.user.handle}</p>
  </header>
  <p>${escape(tweet.content.text)}</p>
  <footer>

<p>${timeago.format(tweet.created_at)}</p>
  
    <div>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>`;

    return $tweet;
  };

  // ajax GET request 
  const loadTweets = function() {
    console.log('load tweets');
    $.ajax('/tweets', { method: 'GET' })
      .then(function(tweets) {
        console.log("The tweets are storing in the database");
        console.log(tweets);
        renderTweets(tweets);
      });
    $('#tweeter-text').val("");
    $('.counter').text(140);
  };


  const $form = $('form');
  $form.on('submit', function(events) {
    events.preventDefault();
    console.log('Button clicked, performing ajax call...');
    const tweet = $(this).serialize();
    console.log(tweet);
    if (tweet.length === 5) {
      return $('#error-message').slideDown(400);
    } else if (tweet.length >= 146)
      return $('#error-two').slideDown();
    $.ajax('/tweets', { method: 'POST', data: tweet }).then(loadTweets());
  });
  

  loadTweets();
});


// // $(document).ready(function () {
// //   const data = [
// //     {
// //       "user": {
// //         "name": "Newton",
// //         "avatars": "https://i.imgur.com/73hZDYK.png"
// //         ,
// //         "handle": "@SirIsaac"
// //       },
// //       "content": {
// //         "text": "If I have seen further it is by standing on the shoulders of giants"
// //       },
// //       "created_at": 1461116232227
// //     },
// //     {
// //       "user": {
// //         "name": "Descartes",
// //         "avatars": "https://i.imgur.com/nlhLi3I.png",
// //         "handle": "@rd"
// //       },
// //       "content": {
// //         "text": "Je pense , donc je suis"
// //       },
// //       "created_at": 1461113959088
// //     }
// //   ]

// //    const renderTweets = function (tweets) {
// //     for (let tweet of tweets) {
// //       let createTweet = createTweetElement(tweet);
// //       $('#tweets-container').append(createTweet);
// //     }
// //   };

// //   const createTweetElement = function (tweets) {
// //     const $tweet = $(`<article class="tweet"> 
// //     <header>
// //       <div class="user">
// //         <img src="${tweetData.user.avatars}">
// //         <p>${tweetData.user.name}</p>
// //       </div>
// //       <div class="handle">
// //         <p>${tweetData.user.handle}</p>
// //       </div>
// //     </header>
// //     <div class="tweet-body">
// //       <p>${tweetData.content.text}</p>
// //     <footer>
// //         <p>${timeago.format(tweetData.created_at)}</p>
// //       </div>
// //       <div class="icons">
// //         <i class="fas fa-flag"></i>
// //         <i class="fas fa-retweet"></i>
// //         <i class="fas fa-heart"></i>
// //       </div>
// //     </footer>
// //     </article>`;
// //   return $tweet;
// //   };
// // });

// $(document).ready(function() {



//   // Fake data taken from initial-tweets.json
//   const data = [
//     {
//       "user": {
//         "name": "Newton",
//         "avatars": "https://i.imgur.com/73hZDYK.png"
//         ,
//         "handle": "@SirIsaac"
//       },
//       "content": {
//         "text": "If I have seen further it is by standing on the shoulders of giants"
//       },
//       "created_at": 1461116232227
//     },
//     {
//       "user": {
//         "name": "Descartes",
//         "avatars": "https://i.imgur.com/nlhLi3I.png",
//         "handle": "@rd"
//       },
//       "content": {
//         "text": "Je pense , donc je suis"
//       },
//       "created_at": 1461113959088
//     }
//   ];

//   /* Your code for creating the tweet element */
//   const renderTweets = function(tweets) {
//     // loops through tweets
//     for (let tweet of tweets) {
//       // calls createTweetElement for each tweet
//       let createATweet = createTweetElement(tweet);
//       // takes return value and appends it to the tweets container
//       $("#tweet-container").prepend(createATweet);
//     }


//   };

//   const escape = function(str) {
//     let div = document.createElement("div");
//     div.appendChild(document.createTextNode(str));
//     return div.innerHTML;
//   };

//   const createTweetElement = function(tweet) {
//     let $tweet = `
// <article class="tweet">
//   <header>
//     <div>
//       <img src=${tweet.user.avatars} width="60px"
//         alt="">
//       <p>${tweet.user.name}</p>
//     </div>
//     <p>${tweet.user.handle}</p>
//   </header>
//   <p>${escape(tweet.content.text)}</p>
//   <footer>
//     <p>${timeago.format(tweet.created_at)}</p>
//     <div>
//       <i class="fa-solid fa-flag"></i>
//       <i class="fa-solid fa-retweet"></i>
//       <i class="fa-solid fa-heart"></i>
//     </div>
//   </footer>
// </article>`;

//     return $tweet;
//   };

//   // ajax GET request 
//   const loadTweets = function() {
//     $.ajax('/tweets', { method: 'GET' })
//       .then(function(tweets) {
//         console.log("The tweets are storing in the database");
//         renderTweets(tweets);
//       });
//     $('#tweeter-text').val("");
//     $('.counter').text(140);
//   };


//   const $form = $('form');
//   $form.on('submit', function(events) {
//     events.preventDefault();
//     console.log('Button clicked, performing ajax call...');
//     const tweet = $(this).serialize();
//     console.log(tweet);
//     if (tweet.length === 5) {
//       return $('#error-message').slideDown(400);
//     } else if (tweet.length >= 146)
//       return $('#error-two').slideDown();
//     $.ajax('/tweets', { method: 'POST', data: tweet }).then(loadTweets());
//   });
  

//   loadTweets();
// });

