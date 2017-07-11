    var findModule = angular.module('findModule',['ngRoute']);
    findModule.config(['$routeProvider',function($routeProvider){
        $routeProvider
        .when('/find',{
            template:'<h3>{{info}}</h3>',
            controller:'findController'
        })
    }]);
    findModule.controller('findController',function($scope){
        $scope.info = '发现音乐';
    });