'use strict';

var nav = angular.module('navigation' []);

nav.controller('HeaderController', require('./header-controller'));
nav.constant(HEADER_TEMPLATE, require('./header.html'));

module.exports = nav;