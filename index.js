
var express = require('express');
var app = module.exports = express();

app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.use(require('boot'));
