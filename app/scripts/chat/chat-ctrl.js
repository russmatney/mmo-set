'use strict';

angular.module('chat', [])
  .controller('ChatCtrl', function ($scope, socket) {
    $scope.messages = [];
    $scope.username = '';
    
    socket.on('send:message', function(message){
      $scope.messages.push({message: message.message, username: message.username, time: message.time});
    });
    
    socket.on('user:join', function (data) {
      $scope.messages.push({message: "New User Joined!", time: new Date()});
    });

    $scope.sendMessage = function () {
        socket.emit('send:message', {message: $scope.message, username: $scope.username, time: new Date()});
        $scope.messages.push({message: $scope.message, username: $scope.username, time: new Date()});
        $scope.message = '';
    };
    
  });
