var app = angular.module('app', ['ngRoute', 'game'])

app.config(['$routeProvider', function ($routeProvider) {
  
  $routeProvider.when('/', 
    {templateUrl: "game/game.html", controller: 'GameCtrl'});

}]);

app.controller('AppCtrl', [function () {
}]);
