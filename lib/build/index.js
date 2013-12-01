var Builder = require('component-builder');
var templates = require('./templates');
var fs = require('fs');
var write = fs.writeFileSync;

module.exports = function(req, res, next) {
  var builder = new Builder('.');
  builder.use(templates);
  builder.build(function(err, res){
    if (err) return next(err);
    write('public/app.js', res.require + res.js);
    console.log("app.js built");
    next();
  });
};

