'use strict';

// Define
var stylists = angular.module('stylists', []);

// Controller
stylists.controller('StylistsController', require('./stylists-controller'));

// HTML View
stylists.constant('STYLISTS_TEMPLATE', require('./stylists.html'));

// Export
module.exports = stylists;