angular.module('app',[]);
angular.module('app').controller('MainCtrl', function ($scope){
 $scope.msg = 'hellooooo';
 $scope.updateMessage = function(message){
    $scope.msg = message;
  };
});