// require non-express helper modules
var path = require('path');

// require express
var express = require('express');
var app = express();

// require timestamp-date helper
var converter = require('./helper_modules/converter.js');

// helper functions
var returnError = function(req, res) {
  res.send({unix: null, natural: null});
};

// app routing
app.get('/', function(req, res) {
  // render the home page index.html
  res.sendFile(path.join(__dirname, 'index.html'));
});

// e.g. 1450137600
app.get('/:timestamp([0-9]+)', function(req, res, next) {
  var timestamp = parseInt(req.params.timestamp);
  var dateString = converter.timestampToDateString(timestamp);
  
  if (dateString === null)
    next();
  
  res.send({unix: timestamp, natural: dateString});
});

// e.g. December 14, 2015
app.get('/:dateString([a-zA-Z]+%20[0-9]+,%20[0-9]+)', function(req, res, next) {
  var dateString = req.params.dateString;
  var timestamp = converter.dateStringToTimestamp(dateString);
  
  if (dateString === null)
    next();
  
  res.send({unix: timestamp, natural: dateString});
});

// other
app.use(returnError);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
