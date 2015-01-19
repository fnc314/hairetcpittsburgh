'use strict';

module.exports = [
  '$routeProvider',
  'HOME_TEMPLATE',
  'STYLISTS_TEMPLATE',
  'OFFERINGS_TEMPLATE',
  'CONTACT_US_TEMPLATE',
  'PHOTOS_TEMPLATE',
  'ABOUT_US_TEMPLATE',
  function ($routeProvider, HOME_TEMPLATE, STYLISTS_TEMPLATE, OFFERINGS_TEMPLATE, CONTACT_US_TEMPLATE, PHOTOS_TEMPLATE, ABOUT_US_TEMPLATE) {
  $routeProvider
    .when('/home', {
      template: HOME_TEMPLATE,
      controller: 'HomeController as homeCtrl'
    })
    .when('/stylists', {
      template: STYLISTS_TEMPLATE,
      controller: 'StylistController as stylistCtrl'
    })
    .when('/offerings', {
      template: OFFERINGS_TEMPLATE,
      controller: 'OfferingsController as offeringCtrl'
    })
    .when('/contact-us', {
      template: CONTACT_US_TEMPLATE,
      controller: 'ContactUsController as contactUsCtrl'
    })
    .when('/photos', {
      template: PHOTOS_TEMPLATE,
      controller: 'PhotosController as photoCtrl',
    })
    .when('/about-us', {
      template: ABOUT_US_TEMPLATE,
      controller: 'AboutUsController as aboutUsCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });

}];