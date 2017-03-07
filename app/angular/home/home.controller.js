angular
    .module('home.module')
    .controller('HomeCtrl', HomeCtrl)


//brain of our view happens before view is set up
function HomeCtrl($scope){
    this.foo = 'BARR'
}