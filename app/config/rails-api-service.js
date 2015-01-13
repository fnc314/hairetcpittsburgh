'use strict';

var RailsApiService = function ($q, $http) {

  var railsApiServce = this;

  railsApiService.getLocalData = function (fileName) {
    var deferred = $q.defer();
    var route = 'data/' + fileName + '.json';
    $http.get(route).then(
      // DO SOME SHIT
      );
  }
}