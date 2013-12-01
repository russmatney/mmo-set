var page = require('page');

var content = document.querySelector('#content');

page('*', function(context, next){
  console.log('boot.js page *');
  content.innerHTML = '';
  next();
})

page()
