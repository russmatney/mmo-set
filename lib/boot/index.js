var build = require('build');
var express = require('express');
var app = module.exports = express();

app.set('views', __dirname);

app.get('*', build, function(req, res){
  console.log('boot.index.js got *');
  res.render('index');
});
