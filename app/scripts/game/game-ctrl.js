'use strict';

// Main game controller
angular.module('game.main', []);

angular.module('game.main').controller('GameCtrl', ['$scope', 'checkWin', 'cardBuilder', 'availableWins', function ($scope, checkWin, cardBuilder, availableWins){
  // defaults
  $scope.score = 0;
  $scope.availableWins = 0;
  $scope.sets = [];
  $scope.set = [];

  // init game
  $scope.cards = cardBuilder.generateCards(9);
  $scope.$watch('cards.length', function(){
    $scope.availableWins = availableWins($scope.cards);
  });
  
  // Timer
  $scope.time = 0;
  var update = function(){
    setTimeout(function(){
      $scope.time = $scope.time + 1;
      update();
      $scope.$digest();
    }, 1000);
  };
  update();

  // select card and check for win
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

  // add new cards
  $scope.addCards = function() {
    var newCards = cardBuilder.generateCards(3);
    newCards.forEach(function(card){
      $scope.cards.push(card);
    });

    if($scope.availableWins > 0){
      $scope.score--;
    }
  };

  // remove set, increment score, clear hand
  $scope.handleWin = function(){
    // remove winning cards
    for (var i = 0; i < 3; i++) {
      var index = $scope.cards.indexOf($scope.set[i]);
      if (index !== -1){
        $scope.cards.splice(index, 1);
      }
    }
    // empty hand
    $scope.sets.push($scope.set);
    $scope.set = [];

    $scope.score++;
  };

}]);