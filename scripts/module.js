angular.module('crowdpaths', [])
    .controller('MainController', function ($scope, $window, $log) {
        $scope.toolbarTitle = "Android Tutorial by Clark Gable";
        $scope.durationTime = "46h 15m";
        $scope.usersCompleted = 1337;
        $scope.pathRating = 5;
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

        $scope.showContent = function (path, id) {
            if (path === 'material') {
                if ($(".path-material").hasClass("hidden")) {
                    $(".path-material").removeClass("hidden");
                    $("#" + id).text("HIDE CONTENT");
                }
                else {
                    $(".path-material").addClass("hidden");
                    $("#" + id).text("SHOW CONTENT");
                }
                //$(".path-material").addClass("show");
            }
            else if (path === 'gaming') {
                if ($(".path-gaming").hasClass("hidden")) {
                    $(".path-gaming").removeClass("hidden");
                    $("#" + id).text("HIDE CONTENT");
                }
            }
        }


        $scope.startPageContent = [
            {
                "title": "Winter is coming: Get to know everything about skiing",
                "durationTime": "15h 00m",
                "usersCompleted": "6492",
                "numberAlternativePaths": "2",
                "shortDescription": "Winter is coming! You know nothing about skiing." +
                "You either win the game of skies, or you fall. Learn everything " +
                "from A to Z about skiing, and be called the King of the Hill, Mr. Snow!",
                "imgSrc": "img/ski.png",
                "rating": "5"
            },
            {
                "title": "Grandma's Cookbook: How to cook without burning the kitchen",
                "durationTime": "21h 45m",
                "usersCompleted": "10.492",
                "numberAlternativePaths": "7",
                "shortDescription": "You love eating but do not know how to cook? You missing home and want to cook" +
                "like Grandma did? Then you are absolutely right here. From Bratwurst to Sauerkraut, " +
                "learn how to cook without creating a mess!",
                "imgSrc": "img/cookbook.png",
                "rating": "4"

            },

            {
                "title": "Star Worms - Everything about small creatures ",
                "durationTime": "23h 45m",
                "usersCompleted": "42",
                "numberAlternativePaths": "4",
                "shortDescription": "Interested in the small things of life? In the little creatures that live with " +
                "us and that are so important? Go this path and learn everything about small animals.",
                "imgSrc": "img/worm.png",
                "rating": "3"

            },
            {
                "title": "Knit a bit",
                "durationTime": "7h 30m",
                "usersCompleted": "193",
                "numberAlternativePaths": "2",
                "shortDescription": "Attend this course to knit the most beautiful clothes for your beloved ones!",
                "imgSrc": "img/knitst.png",
                "rating": "2"

            },
            {
                "title": "Android: From Zero to Hero",
                "durationTime": "46h 15m",
                "usersCompleted": "1337",
                "numberAlternativePaths": "3",
                "shortDescription": "You don't have any experience in Android development but want to conquer the " +
                "playstore? Then you are right here! Get to know the basics of Android, gain knowledge in the" +
                "newest design principles - Material Design - and release your first app to the world!.",
                "imgSrc": "img/Android1.png",
                "rating": "5"
            },
            {
                "title": "Big Data: Collect, Transform, Rule",
                "durationTime": "61h 30m",
                "usersCompleted": "4239",
                "numberAlternativePaths": "6",
                "shortDescription": "Big Data becomes more and more important. But Big Data is nothing you just have" +
                "or you can look at and know the future instantaneous. You have to get access to the right data sources," +
                "prepare the data in the way you need it and learn how to get powerful insights.",
                "imgSrc": "img/bigdata.png",
                "rating": "4"

            },
            {
                "title": "Design Dojo - Bring your Imagination to Paper",
                "durationTime": "34h 35m",
                "usersCompleted": "3021",
                "numberAlternativePaths": "9",
                "shortDescription": "Design is too important to just leave it to the Designers. Learn the " +
                "most modern principles of design and bring your thoughts and imagination to paper!",
                "imgSrc": "img/design.png",
                "rating": "4"

            }
        ]
        ;
    })
;

