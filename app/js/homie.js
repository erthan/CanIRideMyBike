var bg = { "yes" : "#83F2CB", "no" : "#83C8F2"}
function getResponse(){
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


function callAPI(_lat, _lng){
  var callURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + _lat + "&lon=" + _lng + "";
  return JSON.parse(httpGet(callURL));
}

function httpGet(theUrl){
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
