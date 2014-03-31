'use strict';

/* Controllers */

var app = angular.module('canIRideMyBike', []);

app.controller('WeatherCtrl', function ($scope) {
  var weatherInfo = callAPI();
  $scope.city = weatherInfo.name;
  $scope.response = getResponse(weatherInfo);
});
