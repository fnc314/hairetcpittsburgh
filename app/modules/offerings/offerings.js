'use strict';

// Define
var offerings = angular.module('offerings', []);

// Controller
offerings.controller('OfferingsController', require('./offerings-controller'));

// HTML View
offerings.constant('OFFERINGS_TEMPLATE', require('./offerings.html'));

// Export
module.exports = offerings;