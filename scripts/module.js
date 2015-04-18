angular.module('crowdpaths', [])
    .controller('MainController', function ($scope, $window, $log) {
        $scope.toolbarTitle = "Android Tutorial by Clark Gable";
        $scope.durationTime = "3h 05m";
        $scope.usersCompleted = 1337;
        $scope.pathRating = 4.3;
        $scope.numberAlternativePaths = 3;
        $scope.searchQuery;

        $scope.focus = function () {
            console.log("focus");
            angular.element(document.getElementById('search-icon')).addClass("focus");
        };
        $scope.blur = function () {
            console.log("unfocus");
            angular.element(document.getElementById('search-icon')).removeClass("focus");
        }
    });

