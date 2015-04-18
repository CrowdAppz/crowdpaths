(function (global) {
    'use strict';

    var internal = {
        init: function () {
            var gitgraph = new GitGraph({
                template: "metro",
                orientation: "vertical"
            });

            var master = gitgraph.branch("master");
            master.commit({
                dotSize: 28,
                detailId: "stats-card",
                message: "sc"
            }).commit( {
                dotSize: 28,
                detailId: "card-1",
                message: "1"
            }).commit({
                dotSize: 28,
                message: "2",
                detailId: "card-2"
            });
            var develop = gitgraph.branch("develop");
            develop.commit({
                dotSize: 28,
                message: "3",
                detailId: "card-3"
            }).commit({
                dotSize: 28,
                message: "4",
                detailId: "card-4"
            });
            master.commit({
                dotSize: 28,
                message: "5",
                detailId: "card-5"
            });

            global.gitgraph = gitgraph;

            internal.bindCanvasClick();
        },
        bindCanvasClick: function () {
            var graphCanvas = $("#gitGraph")[0];
            $("#gitGraph").on("click", function (event) {
                global.eve = event;
                var x = event.originalEvent.pageX - graphCanvas.offsetLeft - global.gitgraph.marginX;
                var y = event.originalEvent.pageY - graphCanvas.offsetTop - global.gitgraph.marginY;
                var i, commit;

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