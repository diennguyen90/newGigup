'use strict';

angular.module('diennguyenApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
    	})
      .when('/events', {
    	templateUrl: 'app/main/events.html',
    	controller: 'EventCtrl'
      })
      .when('/signup', {
      	templateUrl:'app/main/signup.html',
      	controller: 'SignupCtrl'
      })
      .when('/eventDetails', {
        templateUrl: 'app/main/eventDetail.html',
        controller: 'EventCtrl'
      });
  });