'use strict';

var debug = require('debug')('helpers');

module.exports = {
  cacheKey: cacheKey,
  passwordCheck: passwordCheck,
  quotaHelper: quotaHelper,
  clientIp: clientIp
};

function clientIp(req) {
  var key = req.connection.remoteAddress;
  debug('clientIp Key: %s', key);
  return key;
}

function quotaHelper(req) {
  var key = 'someKey';
  debug('Quota Key: %s', key);
  return key;
}

function cacheKey(req) {
  // This can check for a specific query parameter
  var key = req.swagger.params.city.value;
  debug('Cache Key: %s', key);
  return key;
}

function passwordCheck(username, password, cb) {

  var passwordOk = (username === 'scott' && password === 'apigee');
  debug('Password check: %b', passwordOk);
  cb(null, passwordOk);
}
