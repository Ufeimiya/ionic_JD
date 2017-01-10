// 主页功能子路由
angular.module('home.route', ['home.controller'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab.home', {
        url: '/home',
        // 在页面中有多个坑的时候，指定模板页面要渲染到哪个坑里面
        views: {
          'tab-home': {
            templateUrl: 'areas/home/home.html',
            controller: 'HomeCtrl'
          }
        }

      });
  })
