var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

//var textBuffer = new Buffer(128);
var textBuffer = fs.readFileSync('index.html','utf-8');
var text = textBuffer.toString();
app.get('/', function(request, response) {
  response.send(text)
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 
//var express = require('express');


//var app = express.createServer(express.logger());
//var buf_contents = fs.readFileSync('index.html','utf-8');
//var str_contents = buf_contents.toString();

//app.get('/', function(request, response) {
//  response.send(str_contents);
//});
//
//var port = process.env.PORT || 5000;
//app.listen(port, function() {
//  console.log("Listening on " + port);
//});
