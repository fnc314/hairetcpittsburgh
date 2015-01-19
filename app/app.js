'use strict';

// General require statments
require('jquery-browserify');
require('angular/angular');
require('angular-route/angular-route');
require('bootstrap/angular-bootstrap/ui-bootstrap');
require('bootstrap/angular-bootstrap/ui-bootstrap-tpls');

// require statements pulling in each module's JS file
require('modules/photos/photos');
require('modules/about-us/about-us');
require('modules/stylists/stylists');
require('modules/offerings/offerings');
require('modules/contact-us/contact-us');
require('modules/navigation/navigation');

// array of dependencies
var dependencyArray = [
  // External & AngularJS
  'ngRoute', 'ngResource', 'ui.bootstrap', 'ui.bootstrap.tpls',

  // Each module name goes here
  'photos', 'about-us', 'stylists', 'offerings', 'contact-us', 'navigation'
];

// Declaration of application via name and adding config of routes and config of global urls available (like URIConfig)
var HairEtcPittsburgh = angular.module('HairEtcPittsburgh', dependencyArray);

HairEtcPittsburgh.config(require('app/config/route'));
HairEtcPittsburgh.config('UriConfig', require('app/config/uri'));
HairEtcPittsburgh.service('ApiService', require('app/config/service'));