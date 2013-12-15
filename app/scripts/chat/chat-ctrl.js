'use strict';

angular.module('chat', [])
  .controller('ChatCtrl', function ($scope, socket) {
    $scope.messages = [];
    
    socket.on('send:message', function(message){
      $scope.messages.push({message: message, time: new Date()});
    });
    
    socket.on('user:join', function (data) {
      $scope.messages.push({message: "New User Joined!", time: new Date()});
    });

    $scope.sendMessage = function () {
        socket.emit('send:message', $scope.message);
        $scope.messages.push({message: $scope.message, time: new Date()});
        $scope.message = '';
    };
    
  });
