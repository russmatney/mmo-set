'use strict';

angular.module('app')
  .controller('MainCtrl', function ($scope, $http) {
    console.log('hello, i am a controller');
    $http.get('/api/awesome-things').success(function(awesomeThings) {
      console.log('hello, i am an api call');
    });

    $http.get('/api/cool-new-thing').success(function(coolNewThing) {
      console.log('hey there, i"m a cool new thing, aren" i?');
      $scope.coolNewThing = coolNewThing;
    });
  });
