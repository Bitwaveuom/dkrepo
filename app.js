angular.module('app',[]);
angular.module('app').controller('MainCtrl', function ($scope){
 $scope.msg = 'hello';
 $scope.updateMessage = function(message){
    $scope.msg = message;
  };
});