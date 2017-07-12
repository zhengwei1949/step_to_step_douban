(function(angular){
  
  // 1.创建正在热映模块
  var app = angular.module('coming_soon', ['ngRoute'])

  // 2.路由规则
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/coming_soon',{  // #/coming_soon
      templateUrl:'./coming_soon/coming_soon.html',
      controller:'coming_soonController'
    })
  }])

  // 3.创建控制器
  app.controller('coming_soonController', ['$scope',function($scope){
    $scope.data = []
  }])

})(angular)