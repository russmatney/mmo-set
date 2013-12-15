'use strict';

angular.module('app', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'game',
  'socket',
  'chat'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/game/:gameId', {
        templateUrl: 'partials/game.html',
        controller: 'OnlineGameCtrl'
      })
      .when('/chat/:gameId', {
        templateUrl: 'partials/chat.html',
        controller: 'ChatCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
