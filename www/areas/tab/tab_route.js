// tab模板页面子路由
angular.module('tab.route', ['tab.controller'])
  .config(function($stateProvider, $urlRouterProvider) {

    // $stateProvider:定义路由用的服务
    // $urlRouterProvider：进行路由跳转的服务

    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,// 加上这个属性之后就变成了抽象路由
        templateUrl: 'areas/tab/tab.html',
        controller: 'TabCtrl'
      })

  });
