var latitude, longitude;
var city = "";
var celsius = true;
var api = "http://api.openweathermap.org/data/2.5/weather?APPID=8472eea9343787fcece274a7a1808630";
var weather, weatherMore, icon;

function getGeolocation() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://ipinfo.io/geo",
    "method": "GET"
  };

  $.ajax(settings).done(function (response) {
    var coordinates = response.loc.split(",");
    latitude = coordinates[0];
    longitude = coordinates[1];
    $("#data").html(
      "latitude: " + latitude + "<br>longitude: " + longitude
    );
    geoWeather();
  });
}

function geoWeather () {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": api + "&lon=" + longitude + "&lat=" + latitude,
    "method": "GET"
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    weather = response.weather[0].main;
    
  });
}

function cityWeather () {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": api + "&q=" + city,
    "method": "GET",
  };

  $.ajax(settings).done(function (response) {
    console.log(jQuery.parseJSON(response));
    weather = jQuery.parseJSON(response);
  });
}

function printWeather () {
  console.log(weather);
}

$("#geo-send").on("click", function () {
  getGeolocation();
  // geoWeather();
});