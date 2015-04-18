angular.module('crowdpaths', [])
    .controller('MainController', function ($scope,  $window, $log) {
        $scope.toolbarTitle = "Android Tutorial by Clark Gable";
        $scope.durationTime = "3h 05m";
        $scope.usersCompleted = 1337;
    });

