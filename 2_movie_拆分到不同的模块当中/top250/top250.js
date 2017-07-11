(function(angular){
  
  // 1.创建正在热映模块
  var app = angular.module('top250', ['ngRoute'])

  // 2.路由规则
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/top250',{  // #/top250
      templateUrl:'./top250/top250.html',
      controller:'top250Controller'
    })
  }])

  // 3.创建控制器
  app.controller('top250Controller', ['$scope',function($scope){
    $scope.data = []
  }])

})(angular)