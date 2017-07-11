(function(angular){
  
  // 1.创建正在热映模块
  var app = angular.module('in_theaters', ['ngRoute'])

  // 2.路由规则
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/in_theaters',{  // #/in_theaters
      templateUrl:'./in_theaters/in_theaters.html',
      controller:'in_theatersController'
    })
  }])

  // 3.创建控制器
  app.controller('in_theatersController', ['$scope',function($scope){
    $scope.data = []
  }])

})(angular)