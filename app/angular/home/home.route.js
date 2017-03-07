// links dashboard.controller.js, dashboard.route.js and dashboard.html together

angular
    .module('home.module',[])
    .config(homeConfig); //takes a function as a property


function homeConfig($stateProvider){
    $stateProvider.state({

        // this can be named whatever
        name: 'home',

         // localhost:3000/#/
        url: '/',

        // index.html --> path to --> dashboard.html.js
        templateUrl: '/angular/home/home.html', 

         //dashboard.controller.js --> .controller('DashboardCtrl', DashboardCtrl)
        controller: 'HomeCtrl',

        //dashboard.html  -->  <h1>{{DashboardVM.foo}}</h1>
        // foo is from dashboard.controller.js
        controllerAs: 'HomeVM' 

    });

}
