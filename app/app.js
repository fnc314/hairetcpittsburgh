'use strict';

// General require statments


// require statements pulling in each module's JS file
require('modules/photos/photos');

// array of dependencies
var dependencyArray = [
  // Each module name goes here
  'photos'
];

// Declaration of application via name and adding config of routes and config of global urls available (like URIConfig)
var HairEtcPittsburgh = angular.module('HairEtcPittsburgh', dependencyArray);

// HairEtcPittsburgh.config(require('app/config/route'));
// HairEtcPittsburgh.config('UriConfig', require('app/config/uri'));
