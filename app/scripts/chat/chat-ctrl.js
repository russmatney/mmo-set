'use strict';

angular.module('chat', [])
  .controller('ChatCtrl', function ($scope, socket) {
    $scope.messages = [];
    
    socket.on('send:message', function(message){
      $scope.messages.push(message);
    });
    
    socket.on('user:join', function (data) {
      $scope.messages.push("New user joined!" + data);
    });

    $scope.sendMessage = function () {
        socket.emit('send:message', $scope.message);
        $scope.messages.push($scope.message);
        $scope.message = '';
    };
    
  });
