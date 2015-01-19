'use strict';

// Define
var aboutUs = angular.module('about-us', []);

// Controller
aboutUs.controller('AboutUsController', require('./about-us-controller'));

// HTML View
aboutUs.constant('ABOUT_US_TEMPLATE', require('./about-us.html'));

// Export
module.exports = aboutUs;