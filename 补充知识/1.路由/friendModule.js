var friendModule = angular.module('friendModule',['ngRoute']);
    friendModule.config(['$routeProvider',function($routeProvider){
        $routeProvider
        .when('/friend',{
            template:'<h3>{{info}}</h3>',
            controller:'friendController'
        })
    }]);
    friendModule.controller('friendController',function($scope){
        $scope.info = '朋友音乐';
    });