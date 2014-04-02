'use strict';

/* Controllers */

angular.module('canIRideMyBike', [])
  .controller('WeatherCtrl', function ($scope) {
  navigator.geolocation.getCurrentPosition(function(pos){
    var coords = {lat : pos.coords.latitude, lng : pos.coords.longitude};
    var weatherInfo = callAPI(coords.lat,coords.lng);
    $scope.$apply(function(){
      $scope.city = weatherInfo.name;
      $scope.response = getResponse(weatherInfo);
      $("#loading").toggle();
    });
  });
});
