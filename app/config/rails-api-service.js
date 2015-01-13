'use strict';

var RailsApiService = function ($q, $http, UriConfig) {

  var railsApiServce = this;

  // Doesn't belong here, doesn't use Rails
  railsApiService.getLocalData = function (fileName) {
    var deferred = $q.defer();
    var route = 'data/' + fileName + '.json';
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
  }

  railsApiService.submitContactUs = function (contactForm, dateObj) {
    var route = 'http://localhost:3000/api/website/mailer.json'; // find in UriConfig
    $http({
      method: 'POST',
      url: route,
      data: $.param({date: dateObj, form: contactForm}),
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin' : '*'
      }
    }).success(function (response) {
      console.log("Rails Response", response);

    })
  }
}

module.exports = ['$q', '$http', 'UriConfig', RailsApiService];

// Some sort of export statement
// Include URI config