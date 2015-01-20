'use strict';

var ApiService = function ($q, $http, UriConfig) {

  var apiServce = this;
  var route; // changes per function

  // `page` is either 'home' or 'offering' to determine which UriConfig route to use
  apiService.getLocalData = function (page) {
    if ( page === 'home' ) {
      route = UriConfig.LOCAL_DATA.HOME;
    }
    if ( page === 'offerings' ) {
      route = UriConfig.LOCAL_DATA.OFFERINGS;
    }
    var deferred = $q.defer();
    $http.get(route)
      .success(
        function (response) {
          console.log("Data Folder Success", response);
          deferred.resolve(response);
        }
      )
      .error(
        function (response) {
          console.log("Data Folder Error", response);
          deferred.error(response);
        }
      );
    return deferred.promise;
  }; 

  apiService.submitContactUs = function (contactForm, dateObj) {
    route = UriConfig.LOCALHOST.MAILER;
    $http({
      method: 'POST',
      url: route,
      data: $.param({date: dateObj, form: contactForm}),
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin' : '*'
      }
    }).success(function (response) {
      console.log("Rails Response (Success)", response);
      deferred.resolve(response);
    }).error(function (response) {
      console.log("Rails Response (Success)", response);
      deferred.error(response);
    });
    return deferred.promise;
  };

  apiService.
}

module.exports = ['$q', '$http', 'UriConfig', ApiService];

// Some sort of export statement
// Include URI config