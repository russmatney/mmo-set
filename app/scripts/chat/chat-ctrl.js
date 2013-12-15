'use strict';

angular.module('chat', [])
  .controller('ChatCtrl', function ($scope, socket) {
    $scope.messages = ['hi'];

  });
