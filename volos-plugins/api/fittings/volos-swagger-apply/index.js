'use strict';

var volos = require('volos-swagger');
var path = require('path');

module.exports = function create(fittingDef, bagpipes) {

  var swaggerNodeRunner = bagpipes.config.swaggerNodeRunner;

  var appRoot = swaggerNodeRunner.config.swagger.appRoot;
  fittingDef.helpers = path.resolve(appRoot, fittingDef.helpers || 'api/helpers');
  
  volos.init(fittingDef);

  var middleware = volos.app;

  return function volos_apply(context, cb) {
    middleware(context.request, context.response, cb);
  }
};
