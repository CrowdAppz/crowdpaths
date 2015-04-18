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


        $scope.startPageContent = [
            {
                "title": "Android Tutorial",
                "durationTime": "3h 05m",
                "usersCompleted": "1337",
                "numberAlternativePaths": "3",
                "shortDescription": "Lorem Ipsum is simply dummy text of the printing and " +
                "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
                "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "imgSrc": "img/Android1.png"
            },
            {
                "title": "Android Tutorial",
                "durationTime": "3h 05m",
                "usersCompleted": "1337",
                "numberAlternativePaths": "3",
                "shortDescription": "Lorem Ipsum is simply dummy text of the printing and " +
                "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
                "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "imgSrc": "img/Android1.png"

            },
            {
                "title": "Android Tutorial",
                "durationTime": "3h 05m",
                "usersCompleted": "1337",
                "numberAlternativePaths": "3",
                "shortDescription": "Lorem Ipsum is simply dummy text of the printing and " +
                "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
                "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "imgSrc": "img/Android1.png"

            },
            {
                "title": "Android Tutorial",
                "durationTime": "3h 05m",
                "usersCompleted": "1337",
                "numberAlternativePaths": "3",
                "shortDescription": "Lorem Ipsum is simply dummy text of the printing and " +
                "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
                "when an unknown printer took a foobar of type and scrambled it to make a type specimen book.",
                "imgSrc": "img/Android1.png"

            }
        ]
        ;
    })
;

