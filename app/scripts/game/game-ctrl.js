'use strict';

// Main game controller
angular.module('game.main', []);

angular.module('game.main').controller('GameCtrl', ['$scope', 'checkWin', 'cardBuilder', function ($scope, checkWin, cardBuilder){
  console.log('game controller');
  $scope.score = 0;

  $scope.time = 0;

  var update = function(){
    setTimeout(function(){
      $scope.time = $scope.time + 1;
      update();
      $scope.$digest();
    }, 1000);
  };

  update();

  $scope.cards = cardBuilder.generateCards(9);
  $scope.set = [];

  $scope.selectCard = function(card){
    card.selected = !card.selected;
    if(card.selected){
      $scope.set.push(card);
    } else {
      var index = $scope.set.indexOf(card);
      $scope.set.splice(index, 1);
    }

    if($scope.set.length > 2){
      if(checkWin($scope.set)){
        $scope.handleWin();
      }
    }
  };

  $scope.handleWin = function(){
    console.log($scope.set);
    // remove winning cards if it is a set
    for (var i = 0; i < 3; i++) {
      var index = $scope.cards.indexOf($scope.set[i]);
      console.log(index);
      if (index !== -1){
        var removed = $scope.cards.splice(index, 1);
        console.log(removed);
      }
    }
    // empty hand
    $scope.set = [];
    
    // add new cards
    var newCards = cardBuilder.generateCards(3);
    for (var k = 0; k < 3; k++) {
      console.log(k);
      $scope.cards.push(newCards[k]);
    }

    // increment score
    $scope.score++;
  };

}]);