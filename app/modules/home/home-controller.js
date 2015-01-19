'use strict';

module.exports = [
  '$scope',
  'ApiService',
  function ($scope, ApiService) {

    var homeCtrl = this;

    // Get local data with ApiService
    // Pass in 'home' to get right data
    // bind to view in one call

    // access in DOM as `homeCtrl`
    homeCtrl.addrSched = ApiService.getLocalData('home');
  }
];