'use strict';

// Define
var photos = angular.module('photos', []);

// Controller
photos.controller('PhotosController', require('./photos-controller'));

// HTML View
photos.constant('PHOTOS_TEMPLATE', require('./photos.html'));

// Export
module.exports = photos;