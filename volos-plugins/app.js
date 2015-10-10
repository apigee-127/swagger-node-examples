'use strict';

var SwaggerConnect = require('swagger-connect');
var app = require('connect')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerConnect.create(config, function(err, swaggerConnect) {
  if (err) { throw err; }

  // install middleware
  swaggerConnect.register(app);

  global.config = swaggerConnect.runner.config;

  var port = process.env.PORT || 10010;
  app.listen(port);

  console.log('\nExample curl commands:');

  console.log('\n---------');
  console.log('Direct Proxy:');
  console.log('curl "http://localhost:%s/weather?city=San%20Jose,CA"', port);

  console.log('\n---------');
  console.log('Try this Cached call (10s TTL):');
  console.log('curl "http://localhost:%s/weather_cached?city=San%20Jose,CA"', port);

  console.log('\n---------');
  console.log('Try this call which has a 2-per minute Quota:');
  console.log('curl "http://localhost:%s/weather_quota?city=San%20Jose,CA"', port);

  console.log('\n---------');
  console.log('Get a Client Credential Token (replace {clientId} & {clientSecret}):');
  console.log('curl -X POST "http://localhost:%s/accesstoken" -d "grant_type=client_credentials&client_id=%s&client_secret=%s"',
    port, '{clientId}', '{clientSecret}');

  console.log('\n---------');
  console.log('OAuth Secured Weather Lookup (replace {accessToken}):');
  console.log('curl -H "Authorization: Bearer %s" "http://localhost:%s/weather_secure?city=San%20Jose,CA"',
    '{accessToken}', port);
});
