var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://andruxnet-random-famous-quotes.p.mashape.com/",
    "method": "GET",
    "headers": {
      "x-mashape-key": "r2OwbFjPnOmsh9Nt4xacNUsiIffop1AuhmMjsnS4PWHYyhHuxw",
      "content-type": "application/x-www-form-urlencoded",
      "accept": "application/json",
      "cache-control": "no-cache"
    }
  };
  
  var tweet = "https://twitter.com/intent/tweet?text=";
  
  function getQuote () {
    $.ajax(settings).done(function (response) {
      console.log(jQuery.parseJSON(response));
      var quote = jQuery.parseJSON(response).quote;
      var author = jQuery.parseJSON(response).author;
      tweet = "https://twitter.com/intent/tweet?text=" + '"' + quote +'" -' + author;
      $("#quip").html(quote);
      $("#guy").html(author);
    });
  }
  
    $("document").ready(getQuote);
    $("body").on("keypress", function () {
      $(".row").fadeOut();
      getQuote();
      window.setTimeout(function () {
        $(".row").fadeIn(500);
      }, 1200);
    });
    $("#tweet").on("click", function () {
      // console.log("click!");
      window.open(tweet, "_blank");
    })
  
  