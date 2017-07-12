(function(angular){
  
  // 1.创建正在热映模块
  var app = angular.module('in_theaters', ['ngRoute','myJsonpService'])

  // 2.路由规则
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/in_theaters',{  // #/in_theaters
      templateUrl:'./in_theaters/in_theaters.html',
      controller:'in_theatersController'
    })
  }])

  // 3.创建控制器
  app.controller('in_theatersController', ['$scope','$http','MyService',function($scope,$http,MyService){
      //  $http.get('in_theaters/data.json').then(function(res){
      //   // console.log(res);
      //   $scope.data = res.data;
      //  })
      MyService.jsonp('https://api.douban.com/v2/movie/in_theaters',
      {start:0,count:5},function(data){
        $scope.data = data;
        $scope.$apply();
      })

  }])

})(angular)