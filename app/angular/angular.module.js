angular
    // <body ng-app="angular">
    .module("angular", [

        // cdnjs from index.html
        'ui.router', 

        // Custom dependency
        //dashboard.module.js > .module('angular.dashboard')
        //dashboard.route.js > .module('angular.dashboard')
        'home.module'])

    .config(angularConfig)


function angularConfig($urlRouterProvider){
    //go here if route does not exist
    $urlRouterProvider.otherwise('/') 
}

