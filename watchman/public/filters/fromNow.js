/**
 * fromNow.js
 *
 * Returns date counting from now
 * 
 * @package    Watchman
 * @subpackage Filter
 * @author     Luc Bronsdijk <info@lucbronsdijk.nl>
 */

angular.module('watchman').
    filter('fromNow', function() {
        return function(date) {
            // Set language on dutch
            moment.locale('nl');
            
            return moment(date).fromNow();
        };
});
