/**
 * Subscription.js
 *
 * Subscription service
 * Takes control over show subcriptions
 * 
 * @package    Watchman
 * @subpackage Services
 * @author     Luc Bronsdijk <info@lucbronsdijk.nl>
 */

angular.module('watchman')
    .factory('Subscription', ['$http', function($http) {
        return {
            subscribe: function(show, user) {
                return $http.post('/api/subscribe', { showId: show._id });
            },
            unsubscribe: function(show, user) {
                return $http.post('/api/unsubscribe', { showId: show._id });
            }
        };
    }]);
