// 商品列表服务
angular.module('goodsList.service', [])
  .factory('GoodsListFty', function ($http, $q,GlobalVariable) {
    return {
      // 1、刷新商品列表
      refreshGoodsList: function (message) {
        //select top 10 form list where typeNumber=message.typeNumber
        var obj_goodsListData = [
          {
            name: '澳贝琳 2015秋冬新款韩版修身显瘦中长款毛呢大衣女外套  8615  灰色 L',
            price: '198',
            haoping: '99',
            buy: '81',
            productId: "1",
            src: 'img/goodsList/goods1.jpg'
          },
          {
            name: '素念 毛呢大衣 女 2015秋装新款修身  连帽长袖毛呢外套女中长款呢子 大衣女欧美 藏青兰 L',
            price: '288',
            haoping: '100',
            buy: '253',
            productId: "2",
            src: 'img/goodsList/goods2.jpg'
          },
          {
            name: '玫芭2015秋冬新款韩版时尚中长款毛呢外套修身毛呢大衣女BJ8008  土黄 L',
            price: '269',
            haoping: '99',
            buy: '155',
            productId: "3",
            src: 'img/goodsList/goods3.jpg'
          },
          {
            name: '轻舞飘絮 毛呢外套女秋冬款2015秋款女装韩版修身毛呢大衣女6868 粉色 L',
            price: '288',
            haoping: '100',
            buy: '733',
            productId: "4",
            src: 'img/goodsList/goods4.jpg'
          },
          {
            name: '时竟 2015秋装新款OL通勤A版格子中长款修身毛呢大衣W8928 灰格 L',
            price: '289',
            haoping: '100',
            buy: '773',
            productId: "5",
            src: 'img/goodsList/goods5.jpg'
          },
          {
            name: '伊芙丽2015冬装新款直筒中长款羊毛呢子外套大衣6580927051 大红 S',
            price: '499',
            haoping: '100',
            buy: '6',
            productId: "6",
            src: 'img/goodsList/goods6.jpg'
          },
          {
            name: '辉华恋2015秋装新款宽松型韩版简约中长款长袖立领毛呢大衣WD001 玫紫色 M',
            price: '229',
            haoping: '99',
            buy: '215',
            productId: "7",
            src: 'img/goodsList/goods7.jpg'
          },
          {
            name: 'Ochirly欧时力新女装廓形长款西装式毛呢外套大衣1144341860 大红120 S',
            price: '1323',
            haoping: '69',
            buy: '19',
            productId: "8",
            src: 'img/goodsList/goods8.jpg'
          },
          {
            name: '烟花烫2015秋季新款欧根纱拼色呢子外套裙摆毛呢大衣女中长款厚 从卉 玫红色杂点 M现货',
            price: '368',
            haoping: '69',
            buy: '28',
            productId: "9",
            src: 'img/goodsList/goods9.jpg'
          }
        ];

        // 假设数据请求成功
        var deferred = $q.defer();
        deferred.resolve(obj_goodsListData);
        return deferred.promise;

      },
      //2、下拉加载更多列表商品列表
      loadMoreGoodsList: function (message) {
        var obj_goodsListData = [
          {
            name: '澳贝琳 2015秋冬新款韩版修身显瘦中长款毛呢大衣女外套  8615  灰色 L',
            price: '198',
            haoping: '99',
            buy: '81',
            src: 'img/goodsList/goods1.jpg'
          },
          {
            name: '素念 毛呢大衣 女 2015秋装新款修身  连帽长袖毛呢外套女中长款呢子 大衣女欧美 藏青兰 L',
            price: '288',
            haoping: '100',
            buy: '253',
            src: 'img/goodsList/goods2.jpg'
          },
          {
            name: '玫芭2015秋冬新款韩版时尚中长款毛呢外套修身毛呢大衣女BJ8008  土黄 L',
            price: '269',
            haoping: '99',
            buy: '155',
            src: 'img/goodsList/goods3.jpg'
          },
          {
            name: '轻舞飘絮 毛呢外套女秋冬款2015秋款女装韩版修身毛呢大衣女6868 粉色 L',
            price: '288',
            haoping: '100',
            buy: '733',
            src: 'img/goodsList/goods4.jpg'
          },
          {
            name: '时竟 2015秋装新款OL通勤A版格子中长款修身毛呢大衣W8928 灰格 L',
            price: '289',
            haoping: '100',
            buy: '773',
            src: 'img/goodsList/goods5.jpg'
          },
          {
            name: '伊芙丽2015冬装新款直筒中长款羊毛呢子外套大衣6580927051 大红 S',
            price: '499',
            haoping: '100',
            buy: '6',
            src: 'img/goodsList/goods6.jpg'
          },
          {
            name: '辉华恋2015秋装新款宽松型韩版简约中长款长袖立领毛呢大衣WD001 玫紫色 M',
            price: '229',
            haoping: '99',
            buy: '215',
            src: 'img/goodsList/goods7.jpg'
          },
          {
            name: 'Ochirly欧时力新女装廓形长款西装式毛呢外套大衣1144341860 大红120 S',
            price: '1323',
            haoping: '69',
            buy: '19',
            src: 'img/goodsList/goods8.jpg'
          },
          {
            name: '烟花烫2015秋季新款欧根纱拼色呢子外套裙摆毛呢大衣女中长款厚 从卉 玫红色杂点 M现货',
            price: '368',
            haoping: '69',
            buy: '28',
            src: 'img/goodsList/goods9.jpg'
          }
        ];

        // 假设加载更多数据成功
        var deferred = $q.defer();
        deferred.resolve(obj_goodsListData);
        return deferred.promise;



        // 完整的请求服务器的步骤
        //var deferred = $q.defer();
        //var url=GlobalVariable.SERVER_PATH+'server?message='+message+"callback=JSON_CALLBACK";
        //$http.jsonp(url).success(function(data){
        //  deferred.resolve(data);
        //}).error(function(reason){
        //  deferred.reject(reason);
        //});
        //return deferred.promise;
      },
      //3、数据请求介绍demo
      request:function(message){
        console.log(6);
        // 模拟异步操作
        var deferred = $q.defer();
        setTimeout(function(){
          console.log(7);
          // 假设异步请求成功
          deferred.reject("异步返回来的数据成功");
        },5000)

        console.log(8);
        return deferred.promise;


        //$http的get请求方式
        //$http.get('localhost:8080').success(function(data,status,headers,config){
        //
        //}).error(function(data,status,headers,config){
        //
        //})


         //$http的post请求方式
        //$http.post('localhost:8080',{typeNumber:10001}).success(function(data,status,headers,config){
        //
        //}).error(function(data,status,headers,config){
        //
        //})


        //$http的jsonp请求方式
        //var url1=GlobalVariable.SERVER_PATH+'server?a=a&b=b&c=c&callback=JSON_CALLBACK';
        //var url=GlobalVariable.SERVER_PATH+'server?message='+message+"callback=JSON_CALLBACK";
        //$http.jsonp(url).success(function(data,status,headers,config){
        //
        //}).error(function(data,status,headers,config){

        //})
      },
      // 完整的$http+$q服务的请求方法
      fullRequest:function(message){
        ////完整的数据请求写法
        // （1）创建一个延迟对象
        var deferred = $q.defer();
        console.log(deferred);
        // (2)定义请求方法

        //{url:"http//:server.api.a"}
        var url=GlobalVariable.SERVER_PATH+'server?message='+message+"callback=JSON_CALLBACK";
        $http.jsonp(url).success(function(data,status,headers,config){
          // (3)在成功请求的回调函数中用reslove方法处理一下数据
          console.log(data);
          deferred.resolve(data);
        }).error(function(reason,status,headers,config){
          // (4)在失败请求的回调函数中用reject方法处理一下原因
          deferred.reject(reason)
        })
        // (5)返回我们的延迟对象
        return deferred.promise;

      }
    }


  });
