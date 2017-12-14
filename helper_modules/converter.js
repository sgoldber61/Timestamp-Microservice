
// javascript timestamps are treated as milliseconds, whereas unix tiemstamps are treated as seconds

var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var timestampToDateString = function(timestamp) {
  // calculate date object
  var jsTimestamp = timestamp * 1000;
  var date = new Date(jsTimestamp);
  
  if (isNaN(date.getTime()))
    return null;
  
  return monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
};

var dateStringToTimestamp = function(dateString) {
  // decode dateString
  dateString = decodeURIComponent(dateString);
  
  // process dateString
  var date = new Date(dateString);
  
  if (isNaN(date.getTime()))
    return null;
  
  var jsTimestamp = date.getTime();
  return Math.round(jsTimestamp / 1000);
};

module.exports = {
  timestampToDateString: timestampToDateString,
  dateStringToTimestamp: dateStringToTimestamp
};
