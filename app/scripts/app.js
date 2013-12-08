'use strict';

angular.module('app', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'game'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/game', {
        templateUrl: 'partials/game.html',
        controller: 'GameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
