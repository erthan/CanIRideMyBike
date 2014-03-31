var lat = 42.9869502;
var lng = -81.243177;
var weatherInfo;
var bg = { "yes" : "#83F2CB", "no" : "#83C8F2"}

function getLoc(){

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

}

function getResponse(){
  getLoc();
  weatherInfo = callAPI();
  if( weatherInfo.weather[0].id >= 800 && weatherInfo.weather[0].id <= 804 ){
    $("body").css("background-color", bg.yes)
    return "YES!";
  }
  else{
    $("body").css("background-color", bg.no)
    return "No \nWhy? " + weatherInfo.weather[0].description
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
