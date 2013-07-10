var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

<<<<<<< HEAD
var textBuffer = fs.readFileSync('index.html','utf-8');
=======
var textBuffer = new Buffer(128);
textBuffer = fs.readFileSync('index.html','utf-8');
>>>>>>> 4e85d2b8adf2432cd82fa1b340b05c20b2adfafd
var text = textBuffer.toString();
app.get('/', function(request, response) {
  response.send(text)
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 
