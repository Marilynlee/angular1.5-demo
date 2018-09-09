/**
 * Created by Dragon-PC on 2016/5/12.
 */
//   定义模块 后面可以选择需要引入的其他模块
angular.module('mvc', [])
    .controller('myCtrl', function ($scope) {
        $scope.msg = '我是第1个controller';
    })
    .controller('NEXT', function ($scope) {
        $scope.cont="我是第2个controller";
    });