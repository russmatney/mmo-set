'use strict';

describe('Factory: buildAllSets', function () {

  // load the controller's module
  beforeEach(module('game.util'));

  var buildAllSets;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_buildAllSets_) {
    buildAllSets = _buildAllSets_;
  }));

  it('should return an empty array when no cards are passed in', function () {
    var allSets = buildAllSets();
    expect(allSets).toEqual([]);
  });

  it('should return an empty array when less than 3 cards are passed in', function () {
    var cards = [{a:1}, {b:2}]
    var allSets = buildAllSets(cards);
    expect(allSets).toEqual([]);
  });

  it('should return one set when 3 cards are passed in', function () {
    var cards = [{a:1}, {b:2}, {c:3}]
    var allSets = buildAllSets(cards);
    expect(allSets).toEqual([ [{a:1}, {b:2}, {c:3}] ]);
  });

  it('should return one set when 4 cards are passed in', function () {
    var cards = [{a:1}, {b:2}, {c:3}, {d:4}]
    var allSets = buildAllSets(cards);
    expect(allSets).toEqual([ 
      [{a:1}, {b:2}, {c:3}],
      [{a:1}, {b:2}, {d:4}],
      [{a:1}, {c:3}, {d:4}],
      [{b:2}, {c:3}, {d:4}]
    ]);
  });

  it('should return one set when 4 cards are passed in', function () {
    var cards = [{a:1}, {b:2}, {c:3}, {d:4}, {e:5}]
    var allSets = buildAllSets(cards);
    var expected = [ 
      [{a:1}, {b:2}, {c:3}],
      [{a:1}, {b:2}, {d:4}],
      [{a:1}, {b:2}, {e:5}],
      [{a:1}, {c:3}, {d:4}],
      [{a:1}, {c:3}, {e:5}],
      [{a:1}, {d:4}, {e:5}],
      [{b:2}, {c:3}, {d:4}],
      [{b:2}, {c:3}, {e:5}],
      [{b:2}, {d:4}, {e:5}],
      [{c:3}, {d:4}, {e:5}]
    ];
    expect(allSets).toEqual(expected);
  });
});
