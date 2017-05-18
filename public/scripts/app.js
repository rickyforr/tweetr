/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}






function createTweetElement(object) {

let name = object.user.name
let avatar = object.user.avatars.small
let handle = object.user.handle
let tweetContent = object.content.text
let converted = object.created_at / 1000
let days = ((Date.now() - object.created_at) / 1000) / 86000;

var $newTweets =  $(`<article class='tweet-history'>
                       <header class="tweet-history">
                         <image class="tweet-history" src=${avatar}>
                         <h3 class="tweeter-name">${name}</h3>
                        <p class="tweeter-handle">${handle}</p>
                      </header>
                        <p class="tweets">${tweetContent}</p>
                      <footer class="tweet-history">
                        <p class="tweet-footer">${Math.round(days)} Days Ago</p>
                          <i class="material-icons">flag</i>
                          <i class="material-icons">repeat</i>
                          <i class="material-icons">favorite</i>
                      </footer>
                    </article>`)
return $newTweets;
}

var $tweet = createTweetElement(tweetData);
 $(function() {

 $('.tweet-holder ').prepend($tweet)

});


// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
 // to add it to the page so we can make sure it's got all the right elements, classes, etc.

