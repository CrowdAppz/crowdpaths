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
                image: "flag-checkered-img",
                messageDisplay: true
            }).commit( {
                dotSize: 18,
                detailId: "card-1",
                message: "Android Studio Set-Up",
                image: "android-img",
                messageDisplay: true
            }).commit({
                dotSize: 18,
                message: "Foooo to the bar is the best",
                detailId: "card-2",
                image: "file-pdf-img",
                messageDisplay: true
            });
            var develop = gitgraph.branch("develop");
            develop.commit({
                dotSize: 18,
                message: "Funny texts are funny so am I",
                detailId: "card-3",
                messageDisplay: true
            }).commit({
                dotSize: 18,
                message: "I have no idea what to write here so foooo",
                detailId: "card-4",
                messageDisplay: true
            });
            master.commit({
                dotSize: 18,
                message: "Lorem ipsum dolor sit amet lorem ipsum dolor",
                detailId: "card-5",
                messageDisplay: true
            });

            global.gitgraph = gitgraph;

            internal.bindCanvasClick();
        },
        bindCanvasClick: function () {
            var graphCanvas = $("#gitGraph")[0];
            $("#gitGraph").on("click", function (event) {
                var x = event.originalEvent.pageX - graphCanvas.offsetLeft - global.gitgraph.marginX;
                var y = event.originalEvent.pageY - graphCanvas.offsetTop - global.gitgraph.marginY;
                var i, commit;
                console.log("click: " + x + " | " + y);

                for(i = 0; i < global.gitgraph.commits.length; i++) {
                    commit = global.gitgraph.commits[i];
                    var top = commit.y - commit.dotSize;
                    var bottom = commit.y + commit.dotSize;
                    var left = commit.x - commit.dotSize;
                    var right = commit.x + commit.dotSize;
                    if ((y > top && y < bottom) && (x > left && x < right )) {
                        console.log("clicked on commit: " + commit.sha1);
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