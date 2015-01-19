'use strict';

// Define
var home = angular.module('home', []);

// Controller
home.controller('HomeController', require('./home-controller'));

// HTML View
home.constant('HOME_TEMPLATE', require('./home.html'));

// Export
module.exports = home;