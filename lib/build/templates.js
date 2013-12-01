var str2js = require('string-to-js')
  , path = require('path')
  , fs = require('fs')
  , read = fs.readFileSync;

module.exports = function(builder){
  builder.hook('before scripts', function(pkg) {
    var templates = pkg.config.templates;
    if (!templates) return;

    templates.forEach(function(file){
      var js = str2js(read(pkg.path(file), 'utf8'));
      var newFile = path.basename(file, '.html') + '.js';
      pkg.addFile('scripts', newFile, js);
    });
  });
};
