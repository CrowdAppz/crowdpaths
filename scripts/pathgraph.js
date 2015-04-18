(function (global) {
    'use strict';

    var internal = {
        init: function () {
            var gitgraph = new GitGraph({
                template: "metro",
                orientation: "vertical",
                mode: "compact"
            });
            var master = gitgraph.branch("master");
            master.commit({
                dotSize: 18,
                detailId: "stats-card",
                message: "Android: From Zero to Hero",
                image: "img/flag-checkered.png",
                messageDisplay: true
            }).commit( {
                dotSize: 18,
                detailId: "card-1",
                message: "Android Studio Set-Up",
                image: "img/coursera.png",
                messageDisplay: true
            }).commit({
                dotSize: 18,
                message: "Building your first Hello World App",
                detailId: "card-2",
                image: "img/android.png",
                messageDisplay: true
            }).commit({
                dotSize: 18,
                message: "Activity Lifecycle - Google IO",
                detailId: "card-2",
                image: "img/presentation.png",
                messageDisplay: true
            }).commit({
                dotSize: 18,
                message: "Rich and Responsive Layouts (Lesson 5)",
                detailId: "card-2",
                image: "img/udacity.png",
                messageDisplay: true
            })
            var design = gitgraph.branch("material-design");
            design.commit({
                dotSize: 18,
                message: "Introduction to Material Design",
                detailId: "card-3",
                messageDisplay: true,
                image: "img/youtube-play.png"
            }).commit({
                dotSize: 18,
                message: "Implementing Material Design in your App",
                detailId: "card-4",
                messageDisplay: true,
                image: "img/android.png"
            });
            design.merge(master, {
                dotSize: 18,
                message: "Android Debugging",
                detailId: "card-5",
                messageDisplay: true,
                image: "img/vogella.png"
            });
            master.commit({
                dotSize: 18,
                message: "Android Testing",
                detailId: "card-2",
                image: "img/presentation.png",
                messageDisplay: true
            });
            var game = gitgraph.branch("game-dev");
            game.commit({
                dotSize: 18,
                message: "Chapter 9 - Building the Game",
                detailId: "card-2",
                image: "img/file-pdf.png",
                messageDisplay: true
            });
            master.commit({
                dotSize: 18,
                message: "Note App 1",
                detailId: "card-2",
                image: "img/wiki.png",
                messageDisplay: true
            });
            game.commit({
                dotSize: 18,
                message: "Install and Use Android Play Game Services",
                detailId: "card-2",
                image: "img/gamepad-variant.png",
                messageDisplay: true
            });
            master.commit({
                dotSize: 18,
                message: "Note App 2",
                detailId: "card-2",
                image: "img/file-pdf.png",
                messageDisplay: true
            });
            game.merge(master, {
                dotSize: 18,
                message: "How to get rich with Crap - Release your App!",
                detailId: "card-2",
                image: "img/google-play.png",
                messageDisplay: true
            });

            global.gitgraph = gitgraph;

            internal.bindCanvasClick();
        },
        bindCanvasClick: function () {
            var graphCanvas = $("#gitGraph")[0];
            $("#gitGraph").on("click", function (event) {
                var x = event.originalEvent.pageX - graphCanvas.offsetParent.offsetLeft - graphCanvas.offsetLeft - global.gitgraph.marginX;
                var y = event.originalEvent.pageY - graphCanvas.offsetParent.offsetTop - graphCanvas.offsetTop - global.gitgraph.marginY;
                var i, commit;

                for(i = 0; i < global.gitgraph.commits.length; i++) {
                    commit = global.gitgraph.commits[i];
                    var top = commit.y - commit.dotSize;
                    var bottom = commit.y + commit.dotSize;
                    var left = commit.x - commit.dotSize;
                    var right = commit.x + commit.dotSize;
                    //console.log("x: " + x + " | y: " + y + " / top: " + top
                    //    + " | bottom: " + bottom + " | left: " + left + " | right: " + right);
                    if ((y > top && y < bottom) && (x > left && x < right )) {
                        console.log("clicked on commit: " + commit.message);
                    }
                }
            });
        }
    };

    global.pathgraph = {
        init: function () {
            internal.init();
        }
    };
}(window));