'use strict';

angular.exports = angular.module('photos', [])
  .controller('PhotosController', require('./photos-controller'))
  .template(PHOTOS_TEMPLATE, require('./photos.html'));