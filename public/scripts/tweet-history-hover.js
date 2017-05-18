$(function() {

  $('.material-icons').hide()

  $('.tweet-history').on('mouseover', function (event) {
    $('.material-icons').show()
  });

  $('.tweet-history').on('mouseleave', function (event) {
    $('.material-icons').hide()
  });

});

