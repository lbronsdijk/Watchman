/**
 * App.js
 *
 * Initialize app modules.
 * 
 * @package Watchman
 * @author  Luc Bronsdijk <info@lucbronsdijk.nl>
 */

// Init app
angular.module('watchman', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        // Inject HTML5 PushState for route history
        $locationProvider.html5Mode(true);

        // Routes
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/shows/:id', {
                templateUrl: 'views/detail.html',
                controller: 'DetailCtrl'
            })
            .when('/add', {
                templateUrl: 'views/add.html',
                controller: 'AddCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
