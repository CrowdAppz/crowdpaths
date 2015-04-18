angular.module('crowdpaths', ['ngMaterial', 'ngTextTruncate'])
    .controller('MainController', function ($scope, dataService, $mdSidenav, $mdMedia, $mdDialog, $window, $log) {

    })
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('orange');
    });

