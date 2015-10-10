'use strict';

var request = require('request');
var util = require('util');

module.exports = {
  getWeatherForCity: getWeatherForCity
};

function getWeatherForCity(req, res) {

  var apiKey = global.config.openweathermap_APPID;

  var city = req.swagger.params.city.value;

  var url = util.format('http://api.openweathermap.org/data/2.5/weather?q=%s&APPID=%s', city, apiKey);

  console.log('Requesting: %s', url);

  request.get(url).pipe(res);
}
