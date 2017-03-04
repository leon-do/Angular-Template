angular
    // <body ng-app="angularr">
    .module("angular", [

        // cdnjs from index.html
        'ui.router', 

        // Custom dependency
        //dashboard.module.js > .module('angular.dashboard')
        //dashboard.route.js > .module('angular.dashboard')
        'angular.dashboard'])

    .config(angularConfig)


function angularConfig($urlRouterProvider){
    //go here if route does not exist
    $urlRouterProvider.otherwise('/') 
}