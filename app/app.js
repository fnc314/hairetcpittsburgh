'use strict';

// General require statments
require('jquery-browserify');
require('angular/angular');
require('angular-route/angular-route');
require('bootstrap/angular-bootstrap/ui-bootstrap');
require('bootstrap/angular-bootstrap/ui-bootstrap-tpls');

// require statements pulling in each module's JS file (alphabetical)
require('modules/about-us/about-us'); // empty HTML (no active link in nav)
require('modules/contact-us/contact-us');
require('modules/home/home');
require('modules/navigation/navigation');
require('modules/offerings/offerings');
require('modules/photos/photos');
require('modules/stylists/stylists');

// array of dependencies
var dependencyArray = [
  // External & AngularJS
  'ngRoute', 'ngResource', 'ui.bootstrap', 'ui.bootstrap.tpls',

  // Each module name goes here
  'about-us', 'contact-us', 'home', 'navigation', 'offerings', 'photos',  'stylists'   
];

// Declaration of application via name and adding config of routes and config of global urls available (like URIConfig)
var HairEtcPittsburgh = angular.module('HairEtcPittsburgh', dependencyArray);

HairEtcPittsburgh.config(require('app/config/route'));
HairEtcPittsburgh.config('UriConfig', require('app/config/uri'));
HairEtcPittsburgh.service('ApiService', require('app/config/service'));