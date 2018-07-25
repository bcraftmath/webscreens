var stuff = JSON.parse(global('HTTPD'));

var num = stuff.forecast.simpleforecast.forecastday.length;
var dates = [];
var highs = [];
var lows = [];
for(i=0 ; i<num ; i++){
var month = stuff.forecast.simpleforecast.forecastday[i].date.month;
var day = stuff.forecast.simpleforecast.forecastday[i].date.day;
highs.push(stuff.forecast.simpleforecast.forecastday[i].high.fahrenheit);
lows.push(stuff.forecast.simpleforecast.forecastday[i].low.fahrenheit);
dates.push(month + "/" + day);
};
