//var express = require('express');
//var app = express();

//Define request response in root URL (/)
const teste = () => {
  return 'Hello World';
};

//Launch listening server on port 8080
// app.listen(8080, function () {
//   console.log('App listening on port 8080!')
// })

module.exports.teste = teste;
