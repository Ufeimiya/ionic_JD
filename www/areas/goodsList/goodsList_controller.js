// 商品列表页面
angular.module('goodsList.controller', ['goodsList.service'])
  .controller('GoodsListCtrl', function ($scope, $stateParams, GoodsListFty, $ionicLoading, $ionicHistory) {


    // 和前台绑定的数据对象
    $scope.obj_goodsListData = [];
    // 判断有没有更多数据可以加载
    $scope.pms_isMoreItemsAvailable=true;

    // 分页查询对象
    $scope.obj_pagingInfo = {
      amountMax: "",
      amountMin: "",
      billNum: "",
      createUser: "",
      dateFrom: "",
      dateTo: "",
      deptID: "",
      deptName: "",
      keyWord: "",
      loginName: "",
      billType: "",
      pageNum: 1,// 当前页码
      pageSize: 10, // 每页显示的数量
      sortFlag: "0",// 排序方式
      sortType: "desc",
      typeNumber:""
    };


    // 视图事件
    $scope.$on('$ionicView.beforeEnter', function (e) {
      $scope.func_refreshGoodsList();
    });




    // 下拉刷新数据的方法
    $scope.func_refreshGoodsList=function(){
      console.log("下拉刷新");

      // 修改分页信息对象，并把数据变为字符串传递到service
      $scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
      $scope.obj_pagingInfo.pageNum=1;
      var message=JSON.stringify($scope.obj_pagingInfo);
      console.log(message);

      var promise = GoodsListFty.refreshGoodsList(message);
      promise.then(
        // 成功的回调函数
        function (data) {
          if(data){
            $scope.pms_isMoreItemsAvailable=true;
            $scope.obj_goodsListData=data;
          }

        },
        // 失败的回调函数
        function (reason) {
          console.log(reason);
        }
      ).finally(function() {
        // 停止广播ion-refresher
        $scope.$broadcast('scroll.refreshComplete');
      });

    }



    // 上拉加载更多数据的方法
    $scope.func_loadMoreGoodsList=function(){
      console.log("加载更多");
      $ionicLoading.show({
        template: '正在请求数据...'
      });

      // 修改分页信息对象，并把数据变为字符串传递到service
      $scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
      $scope.obj_pagingInfo.pageNum++;
      var message=JSON.stringify($scope.obj_pagingInfo);
      console.log(message);

      var promise = GoodsListFty.loadMoreGoodsList($stateParams.typeNumber);
      promise.then(
        // 成功的回调函数
        function (data) {

          // 判断返回来是否有数据，代码健壮性判断
          if(!data){
            $scope.pms_isMoreItemsAvailable=false;
          }else{
            $.each(data, function (i, item) {
              $scope.obj_goodsListData.push(item);
            });
          }

        },
        // 失败的回调函数
        function (reason) {
          console.log(reason);
        }
      ).finally(function() {
        // 停止广播
        $scope.$broadcast('scroll.infiniteScrollComplete');
        setTimeout(function(){
          $ionicLoading.hide();
        },2000)

      });

    }

    // 返回前一个页面
    $scope.func_goBack=function(){
      $ionicHistory.goBack();
    }







































    // 演示promise/A+规范执行流程
    //console.log(1);
    //// promise的使用
    //var promise = GoodsListFty.request($stateParams.typeNumber);
    //promise.then(
    //  // 成功的回调函数
    //  function (data) {
    //    console.log(2);
    //    return data;
    //  },
    //  // 失败的回调函数
    //  function (reason) {
    //    console.log(3);
    //    return reason;
    //  }
    //).then(
    //  function (data) {
    //  console.log(4);
    //  console.log("成功：" + data);
    //  }).then(function(){
    //
    //}).finally(function(){
    //  // 不管成功还是失败最后都会走这个finally
    //}).catch(function(){
    //  // 捕获异常
    //})
    //
    //console.log(5);

  })
