'use strict';

// Define
var contactUs = angular.module('contact-us', []);

// Controller
contactUs.controller('ContactUsController', require('./contactu-us-controller'));

// HTML View
contactUs.constant('CONTACT-US_TEMPLATE', require('./contact-us.html'));

// Export
module.exports = contactUs;