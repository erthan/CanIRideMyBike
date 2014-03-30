var lat = 42.9869502;
var lng = -81.243177;
var calLat = 34.0500;
var calLng = 118.2500;
function init(){
  if(navigator.geolocation) {
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
    }, function() {
      //nogeo
    });
  }
  else {
    //nogeo
  }

  var w = callAPI();
  $("#cityName").text(w.name);

  if( w.weather[0].id >= 800 && w.weather[0].id <= 804 ){
    $("#yesno").text("Yes!");
    $("body").css("background-color", "#83F2CB");
    var goodNews= "The sky is " + w.weather[0].main;
    $("#why").text(goodNews);
  }else{
    $("#yesno").text("No");
    $("body").css("background-color", "#83C8F2");
    var badNews = "Why? " + w.weather[0].main + " :("
    $("#why").text(badNews);
  }
}



function callAPI(){
  var callURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "";
  return JSON.parse(httpGet(callURL));
}

function httpGet(theUrl){
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
