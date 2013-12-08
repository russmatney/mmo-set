'use strict';

// Card controller, class logic for styling
angular.module('game.card', []);

// could maybe be cleaner... 
angular.module('game.card').factory('calculateCardClasses', [function(){
  return function(card){
    var classes = '';

    if(card.color === 0) {
      classes += 'red ';
    }else if(card.color === 1) {
      classes += 'blue ';
    }else if(card.color === 2) {
      classes += 'green ';
    }

    if(card.shade === 0) {
      classes += 'solid ';
    } else if (card.shade === 1) {
      classes += 'stripped ';
    } else if(card.shade === 2) {
      classes += 'outline ';
    }

    if(card.shape === 0) {
      classes += 'circle ';
    }else if(card.shape === 1) {
      classes += 'diamond ';
    }else if(card.shape === 2) {
      classes += 'square ';
    }

    if(card.count === 0) {
      classes += 'one ';
    }else if(card.count === 1) {
      classes += 'two ';
    }else if(card.count === 2) {
      classes += 'three ';
    }

    if(card.selected){
      classes += ' active ';
    }
    
    return classes;
  };
}]);

angular.module('game.card').controller('CardCtrl', ['$scope', 'calculateCardClasses', function ($scope, calculateCardClasses){
  $scope.cardClasses = calculateCardClasses;
}]);