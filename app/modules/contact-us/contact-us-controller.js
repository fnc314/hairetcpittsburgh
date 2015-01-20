'use strict';

module.exports = [
  '$scope',
  'ApiService',
  function ($scope, ApiService) {

    var contactUsCtrl = this;

    contactUsCtrl.formData; // Holds the Data to send to Rails

    // Results Message
    contactUsCtrl.resultMessage;
    contactUsCtrl.result = 'hidden';

    // Submission Status
    contactUsCtrl.submitted = false;
    contactUsCtrl.submitButtonDisabled = false;

    // Function to create desired Date data
    $scope.dateBuilder = function() {
      var date = {};
      var d = new Date();
      date.year = d.getFullYear();
      date.month = d.getMonth() + 1; // January = 0 in JS
      date.date = d.getDate();
      date.hour = d.getHours();
      date.minute = d.getMinutes();
      return date
    };

    // Function to add phone number to false success pop-up
    $scope.phoneNumberLink = function() {
      var htmlString = "<a href='tel:+14129214247'>412-921-4247</a>";
      var elem = angular.element(htmlString);
      var resultMessageParagraph = '#resultMessageParagraph';
      $(resultMessageParagraph).append(elem);
    };

    $scope.submit = function (formData) {
      contactUsCtrl.submitted = true;
      contactUsCtrl.submitButtonDisabled = true;
      var date = $scope.dateBuilder();
      if ( formData.$valid ) {
        // SERVICE CALL
        ApiService.submitContactUs(formData, date).then(
          // SUCCESS
          function (response) {
            console.log("Rails Response (Success)", response);
            contactUsCtrl.submitButtonDisabled = true;
            contactUsCtrl.resultMessage = response.data.message;
          },
          // ERROR
          function (response) {
            console.log("Rails Response (Fail)", response);
            contactUsCtrl.submitButtonDisabled = false;
            contactUsCtrl.resultMessage = response.data.message;
          }
      } else {
        contactUsCtrl.submitButtonDisabled = false;
        contactUsCtrl.resultMessage = 'Failed!';
        contactUsCtrl.result = 'alert alert-danger alert-dismissible text-center';
      }
    };

  }
]