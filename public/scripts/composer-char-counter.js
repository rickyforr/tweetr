$(function () {
  $("#tweet-text").on("keyup", function () {
    var max = 140;
    var len = $(this).val().length;
    var char = max - len;
    if (len > max) {
      $(".counter").html(char).css({ color: "red" });
    } else {
      $(".counter").html(char).css({ color: "black" });
    }
  });
});
