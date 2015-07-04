/**
 * Add.js
 *
 * Add TV show controller
 *
 * @package    Watchman
 * @subpackage Controller
 * @author     Luc Bronsdijk <info@lucbronsdijk.nl>
 */

angular.module('watchman')
    .controller('AddCtrl', ['$scope', '$alert', 'Show', function($scope, $alert, Show) {
        $scope.addShow = function() {
            Show.save({ showName: $scope.showName },
                function() {
                    $scope.addForm.$setPristine();
                    $alert({
                        content: 'De serie ' + $scope.showName + ' is toegevoegd.',
                        placement: 'top-right',
                        type: 'success',
                        duration: 3
                    });
                    $scope.showName = '';
                },
                function(response) {
                    $scope.showName = '';
                    $scope.addForm.$setPristine();
                    $alert({
                        content: response.data.message,
                        placement: 'top-right',
                        type: 'danger',
                        duration: 3
                    });
                });
        };
    }]);
