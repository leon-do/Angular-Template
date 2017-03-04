// routes for dashboard to exend the module

angular
    .module('angular.dashboard',[])
    .config(dashboardConfig); //takes a function as a property


function dashboardConfig($stateProvider){
    $stateProvider.state({

        // this can be named whatever
        name: 'dashboard',

         // localhost:3000/#/
        url: '/',

        // index.html --> path to --> dashboard.route.js
        templateUrl: '/angular/features/dashboard/dashboard.html', 

         //capital D end in Ctrl
        controller: 'DashboardCtrl',

        //dashboard.html  -->  <h1>{{DashboardVM.foo}}</h1>
        controllerAs: 'DashboardVM' 

    });

}