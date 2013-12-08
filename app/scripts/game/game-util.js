'use strict';

// Game utility factories
angular.module('game.util', []);

angular.module('game.util').factory('checkWin', [function (){
  var sameOrDifferent = function(set, property){
    if (set[0][property] === set[1][property] && set[1][property] === set[2][property]){
      return true;
    } else if (set[0][property] === set[1][property] || set[1][property] === set[2][property] || set[0][property] === set[2][property]) {
      return false;
    } else {
      return true;
    }
  };

  return function(set){
    var color = sameOrDifferent(set, 'color');
    var shade = sameOrDifferent(set, 'shade');
    var shape = sameOrDifferent(set, 'shape');
    console.log(set);
    if (color && shade && shape){
      console.log('win!');
      return true;
    } else if (color || shade || shape) {
      console.log('almost');
      return false;
    } else {
      console.log('no sir');
      return false;
    }
  };
}]);

angular.module('game.util').factory('availableWins', ['checkWin', function (checkWin){
  // return every group of 3
  var allSets = function(cards){
    console.log(cards.length);
    return [];
  };

  var availableWins = 0;
  allSets.forEach(function(set){
    if(checkWin(set)){
      availableWins++;
    }
  });

  return availableWins;
}]);

angular.module('game.util').factory('cardBuilder', [function(){
  return {
    generateCards: function(numberOfCards){
      var cards = [];
      var shape = 0,
          color = 0,
          shade = 0;
      for (var i = 0; i < numberOfCards; i++) {
        shape = Math.floor(Math.random()*3);
        color = Math.floor(Math.random()*3);
        shade = Math.floor(Math.random()*3);
        cards.push({shape: shape, color: color, shade: shade});
      }
      return cards;
    }
  };
}]);