/**
 * Show.js
 *
 * Show API service
 * 
 * @package    Watchman
 * @subpackage Services
 * @author     Luc Bronsdijk <info@lucbronsdijk.nl>
 */

angular.module('watchman')
    .factory('Show', ['$resource', function($resource) {
        return $resource('/api/shows/:_id');
    }]);
