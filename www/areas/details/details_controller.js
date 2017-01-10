// 详细页面控制器
angular.module('details.controller', ['details.service'])
  .controller('DetailsCtrl', function($scope,GlobalVariable,$stateParams,$ionicHistory,IndexdbJs) {

    // 购物车徽章位置显示的数量
    $scope.obj_cartCount = {
      count: "0"
    }

    // 当详细页面激活之前获取购物车表里面有没有商品数量，如果有，我们就把他给赋值
    $scope.$on('$ionicView.beforeEnter', function (e) {
      IndexdbJs.getAll("cart",function(data){
        for(var i =0;i<data.length;i++){
          $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt(data[i].number);
        }
      },null)
    });


    // 通过后台获取到的商品详细信息数据
    $scope.obj_goodsInfo = {
      goodsId: "200067",
      description: "若昕 韩版睡衣女冬法兰绒家居服加厚珊瑚绒女人卡通甜美睡衣秋冬套装 66651K 女 M",
      prise: "66",
      picture: [],
      src: "",
      isFork: false,
      colorGroup: [{name: "红色", value: "red"}, {name: "蓝色", value: "blue"}],
      sizeGroup: [{name: "s", value: "s"}, {name: "m", value: "m"}, {name: "l", value: "l"}]
    };

    // 数据字典
    //name    number
    //
    //红色    1
    //蓝色    2
    //黄色    3
    //绿色    4


    // 用户选择信息
    $scope.obj_goodsDetailInfo = {
      goodsId: $scope.obj_goodsInfo.goodsId,
      isFork: $scope.obj_goodsInfo.isFork,
      description: $scope.obj_goodsInfo.description,
      src: $scope.obj_goodsInfo.src,
      prise: $scope.obj_goodsInfo.prise,
      color: "",
      size: "",
      number: 1
    }


    // 加入到购物车方法
    $scope.func_addToCart=function(){

      //$scope.obj_goodsDetailInfo.goodsId=$scope.obj_goodsDetailInfo.goodsId+$scope.obj_goodsDetailInfo.color+$scope.obj_goodsDetailInfo.size;
      var obj_newData={};
      // 硬拷贝方法
      angular.copy($scope.obj_goodsDetailInfo,obj_newData);
      // 从新改变编号
      obj_newData.goodsId =obj_newData.goodsId + "-" + obj_newData.color + "-" + obj_newData.size;



      IndexdbJs.update("cart",obj_newData,function(){
        $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt($scope.obj_goodsDetailInfo.number);

        // 异步操作中的数据模型绑定，angular是不能立马监听的。
        //$scope.$apply();
        //$scope.$digest();$scope.$apply();的内部实现
        $scope.$digest();
      },null)
    }

    // 数量加1
    $scope.func_jia1 = function () {
      $scope.obj_goodsDetailInfo.number++;
    }

    // 数量减1
    $scope.func_jian1 = function () {
      if ($scope.obj_goodsDetailInfo.number != 1) {
        $scope.obj_goodsDetailInfo.number--;
      }
    }

    // 返回前一个页面
    $scope.func_goBack=function(){
      $ionicHistory.goBack();
    }


  })
