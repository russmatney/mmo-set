'use strict';

angular.module('chat', [])
  .controller('ChatCtrl', function ($scope, $routeParams, socket) {
    $scope.messages = [];
    $scope.username = '';

    $scope.gameId = $routeParams.gameId;

    // init asks to join or create a game
    socket.emit('init', $scope.gameId);

    socket.on('send:message', function(message){
      $scope.messages.push({message: message.message, username: message.username, time: message.time});
    });
    
    socket.on('user:join', function () {
      $scope.messages.push({message: "New User Joined!", time: new Date()});
    });

    socket.on('user:foundSet', function (data) {
      console.log('chat heard it')
      var message = "Set! user's current score: " + data.currentScore;
      $scope.messages.push({message: message, time: new Date()});
    });

    $scope.sendMessage = function () {
      socket.emit('send:message', {message: $scope.message, username: $scope.username, time: new Date()});
      $scope.messages.push({message: $scope.message, username: $scope.username, time: new Date()});
      $scope.message = '';
    };
    
  });
