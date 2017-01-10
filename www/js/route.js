// 全局路由文件

/*
* 创建者：石国庆     创建时间：2016.7.3
* 模块功能描述：
* 修改人：           修改时间：            修改内容
*
**/

angular.module('route', [
  'guidePage.route',
  'tab.route',
  'home.route',
  'category.route',
  'goodsList.route',
  'details.route',
  'cart.route',
  'account.route'
])
  .config(function($stateProvider, $urlRouterProvider) {

    // 当没有匹配到合适的路由之后默然跳转的url地址，还有就是项目默认启动的url地址
    if(localStorage["isFirst"])
    {
      $urlRouterProvider.otherwise('/tab/home');
    }
    else {
      $urlRouterProvider.otherwise('/guidePage');
    }


  });
