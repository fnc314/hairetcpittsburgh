'use strict';

module.exports = ['$routeProvider', function ($routeProvider) {
  $routeProvider
    .otherwise({
      redirectTo: '/home'
    })
    .when('/home', {
      templateUrl: 'modules/home/home.html',
      controller: 'HomeController as homeCtrl'
    })
    .when('/stylists', {
      templateUrl: 'modules/stylists/stylists.html',
      controller: 'StylistController as stylistCtrl'
    })
    .when('/offerings', {
      templateUrl: 'modules/offerings/offerings.html',
      controller: 'OfferingsController as offeringCtrl'
    })
    .when('/contact-us', {
      templateUrl: 'modules/contact-us/contact-us.html',
      controller: 'ContactUsController as contactUsCtrl'
    })
    .when('/photos', {
      templateUrl: 'modules/photos/photos.html',
      controller: 'PhotosController as photoCtrl',
    })
    .when('/about-us', {
      templateUrl: 'modules/about-us/about-us.html',
      controller: 'AboutUsController as aboutUsCtrl'
    })

}];