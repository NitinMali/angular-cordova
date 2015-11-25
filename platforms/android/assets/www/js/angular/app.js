//Initialising angular app
var empApp = angular.module('empApp', ['ngRoute', 'firebase']);

//Route setting
empApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      }).
      when('/new', {
        templateUrl: 'views/new.html',
        controller: 'newCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);