(function(angular){
  
  // 1.创建正在热映模块
  var app = angular.module('movie_list', ['ngRoute','myJsonpService'])

  // 2.路由规则
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/:movieType/:page?',{  // #/movie_list
      templateUrl:'./movie_list/movie_list.html',
      controller:'movie_listController'
    })
  }])

  // 3.创建控制器
  app.controller('movie_listController', ['$scope','$http','$route','$routeParams','MyService',function($scope,$http,$route,$routeParams,MyService){
      //  $http.get('movie_list/data.json').then(function(res){
      //   // console.log(res);
      //   $scope.data = res.data;
      //  })
      $scope.loading = true // 加载动画
      $scope.pageSize = 5  // 每页多少条
      $scope.page = ($routeParams.page||"1") - 0  // 第几页
      // page:1     0,1,2,3,4
      // page:2     5,6,7,8,9
      // page:3     10,11,12,13,14
      var start  = ($scope.page-1)*$scope.pageSize  // 从第几条开始


      MyService.jsonp('https://api.douban.com/v2/movie/'  +$routeParams.movieType,
      {start:start,count:$scope.pageSize},function(data){
        $scope.loading = false // 让加载动画消失
        $scope.data = data;
        // 根据总条数及每页大小计算出总页数
        $scope.totalPage = Math.ceil($scope.data.total/$scope.pageSize)
        $scope.$apply();
      })

          // 获取指定页的数据
    $scope.getPage = function(nowPage){
      // 小于等于第1页时，不允许获取上一页
      if(nowPage<=0||nowPage>$scope.totalPage){
        return 
      }
      // 改变url中的锚点值
      // MyService.json
      // 这个方法可以改变url中锚点的参数部分
      $route.updateParams({page:nowPage})
    }
  }])

})(angular)