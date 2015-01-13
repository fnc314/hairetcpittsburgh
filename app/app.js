'use strict';

// require statements pulling in each module's JS file


// array of dependencies
var dependencyArray = [
  // Each module name goes here

]

// Declaration of application via name and adding config of routes and config of global urls available (like URIConfig)
var HairEtcPittsburgh = angular.module('HairEtcPittsburgh', dependencyArray)
  // .config(require(app/config/route.js))
  // .constant('UriConfig', require(app/config/uri))