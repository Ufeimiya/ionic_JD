// 全局变量模块
angular.module('global', [])
  .constant("GlobalVariable",{
    'SERVER_PATH':'192.168.1.1:8080/',
    'PORT':'8083',
    'HTTP':'https://',
    'VERSION':"1.0.1"
  })
