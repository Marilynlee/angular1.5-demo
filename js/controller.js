/**
 * Created by Dragon-PC on 2016/5/16.
 */
angular.module('app', [])
    .controller('firstCtrl', function ($scope) {
        $scope.msg = 'Hello Angular';
    })
    .controller('nextCtrl', function ($scope) {
        $scope.msg = 'Hello World';
    });