// links dashboard.controller.js, dashboard.route.js and dashboard.html together

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

         //dashboard.controller.js --> .controller('DashboardCtrl', DashboardCtrl)
        controller: 'DashboardCtrl',

        //dashboard.html  -->  <h1>{{DashboardVM.foo}}</h1>
        // foo is from dashboard.controller.js
        controllerAs: 'DashboardVM' 

    });

}