//Client-side JS logic goes here

//Function that uses jquery to create an html tweet element. it takes an object with tweet data as an argument
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

// function that loops through tweets calls createTweetElement for each tweet takes return value and appends it to the tweets container
function renderTweets(tweetsData) {
  $.each(tweetsData, function(index, value) {
    var $tweet =  createTweetElement(value)
    $(function() {
      $('.tweet-holder').prepend($tweet)
    });
  });
}




let tweetArchive;

$(function() {
  //use compose button to toggle new tweet box to appear with text area highlighted
   $('.new-tweet').hide()
  $('button').on('click', function (event) {
    $('.new-tweet').slideToggle(1000)
    $('textarea').select()
    });



 //actions on form submission. if text is too long/no text show pop up.
  $('#submit-tweet').on('click', function (event) {
    event.preventDefault();
    if ($('textarea').val() === '') {
      alert('Please Enter Some Text');
    }
    else if ($('textarea').val().length > 140) {
      alert('Tweet too long!')
    }

    else {
       $.ajax({

          method: 'POST',
          url: '/tweets',
          data: $('form').serialize(),

        });

       $.ajax({

          method: 'GET',
          url: '/tweets',


        }).done(function(data) {
          //after tweet is posted show tweet history clear text area and reset counter to 140
         tweetArchive = data;
         renderTweets(tweetArchive);
         $('.counter').text('140')
         $('textarea').val('');
         });
    }

  });

});







