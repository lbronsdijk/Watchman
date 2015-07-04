/**
 * Main.js
 *
 * Main controller
 * 
 * @package    Watchman
 * @subpackage Controller
 * @author     Luc Bronsdijk <info@lucbronsdijk.nl>
 */

angular.module('watchman')
    .controller('HomeCtrl', ['$scope', 'Show', function($scope, Show) {

        $scope.headingTitle = 'Top 10 series';

        // Alpabet for filter
        $scope.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
            'Y', 'Z'];

        // List of genres
        $scope.genres = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
            'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
            'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
            'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
            'Travel'];

        $scope.shows = Show.query();

        // Filter by genre
        $scope.filterByGenre = function(genre) {
            $scope.shows        = Show.query({ genre: genre });
            $scope.headingTitle = genre;
        };

        // Filter by alpabet
        $scope.filterByAlphabet = function(char) {
            $scope.shows        = Show.query({ alphabet: char });
            $scope.headingTitle = char;
        };

        $scope.searchIsActive = false;
        $scope.searchButton = function() {
            $scope.searchIsActive = !$scope.searchIsActive;
        };
    }]);
