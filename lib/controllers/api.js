'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    async = require('async');

exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.coolNewThing = function(req, res) {
  console.log('this is my cool new thing!');
  var coolThing = {
    name: 'coolio',
    type: 'rap artist'
  };
  return res.send(200, coolThing);
};
