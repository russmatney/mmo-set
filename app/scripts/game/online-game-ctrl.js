'use strict';

// Main game controller
angular.module('game.online', []);

angular.module('game.online').controller('OnlineGameCtrl', ['$scope', 'checkWin', 'cardBuilder', 'availableWins', function ($scope, checkWin, cardBuilder, availableWins){
  // init game
  $scope.init = function(cardsRemaining) {
    $scope.cardsRemaining = cardsRemaining || 50;
    $scope.cards = cardBuilder.generateCards(9);
    $scope.cardsRemaining -= $scope.cards.length;

    // defaults
    $scope.score = 0;
    $scope.availableWins = 0;
    $scope.sets = [];
    $scope.set = [];
    $scope.gameOver = false;
  };

  $scope.init(13);

  // watch for available wins
  $scope.$watch('cards.length', function(){
    $scope.availableWins = availableWins($scope.cards);
  });

  // watch for no more cards and gameOver
  $scope.$watch('cardsRemaining + availableWins', function(){
    if($scope.cardsRemaining <= 0){
      if($scope.availableWins === 0) {
        $scope.gameOver = true;
        $scope.totalTime = $scope.time;
      }
    }
  });
  
  // Timer
  $scope.time = 0;
  var incrementTimer = function(){
    setTimeout(function(){
      $scope.time = $scope.time + 1;
      incrementTimer();
      $scope.$digest();
    }, 1000);
  };
  incrementTimer();

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
    if($scope.cardsRemaining > 0) {
      var newCards = [];
      if($scope.cardsRemaining > 2) {
        newCards = cardBuilder.generateCards(3);
      } else {
        newCards = cardBuilder.generateCards($scope.cardsRemaining);
      }
      newCards.forEach(function(card){
        $scope.cardsRemaining--;
        $scope.cards.push(card);
      });

      if($scope.availableWins > 0){
        $scope.score--;
      }
    } else {
      console.log('no cards for you.');
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