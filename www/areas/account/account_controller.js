// 我的页面
angular.module('account.controller', ['account.service'])
  .controller('AccountCtrl',function($scope,$window,AccountFty,$cordovaCamera,$ionicPopup,$ionicActionSheet) {


    if(localStorage["touxiang"]){
      var image = document.getElementById('touxiang');
      image.src = "data:image/jpeg;base64," + localStorage["touxiang"];
    }


    // 调用摄像头功能
    $scope.func_showAction=function(){

      // 显示操作表
      $ionicActionSheet.show({
        buttons: [
          { text: '照相机' },
          { text: '图库' },
        ],
        titleText: '请选择文件源',
        cancelText: '取消',
        buttonClicked: function(index) {
          switch(index){
            case 0:func_getPicFromCamera();
              break;
            case 1:func_getPicFromPicture();
              break;
          }
          return true;
        }
      });
    }

    // 从摄像头获取图片
    var func_getPicFromCamera=function(){

      var options = {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        // 获取页面中的img对象
        var image = document.getElementById('touxiang');
        image.src = "data:image/jpeg;base64," + imageData;
        // 保存我们获取的头像数据，下次登录的时候就可以显示了吧
        localStorage["touxiang"]=imageData;
      }, function(err) {
        //$scope.AlertPopup(err);
      });
    }

    // 从图库获取图片
    var func_getPicFromPicture=function(){

      var options = {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        var image = document.getElementById('touxiang');
        image.src = "data:image/jpeg;base64," + imageData;
        localStorage["touxiang"]=imageData;
      }, function(err) {
        //$scope.AlertPopup(err);
      });
    }

    // 打电话
    $scope.func_callPhone=function(number){
      $window.location.href="tel:"+number;
    }


















  })




