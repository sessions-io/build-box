var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {

  res.json({
    name: 'build-box',
    version: '0.1.0'
  });

});

app.post('/', function (req, res) {

  console.log(req.body);
  res.end();

});

var server = http.createServer(app);
server.listen(8080);