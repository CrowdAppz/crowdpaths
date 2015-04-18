(function (global) {
    'use strict';

    var internal = {
        init: function() {
            console.log("test");
        }
    };

    global.pathgraph = {
        init: function() {
            internal.init();
        }
    };
}(window));