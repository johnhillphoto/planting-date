'use strict'

DateApp.controller('dateCtrl', function($scope, $timeout){
  $scope.animateClass = "";
  var animateCounter = 0;
  var today = new Date().toDateString();
  $scope.startDate = new Date(today);
  $scope.endDate = new Date(today);

  $scope.calcMyDays = function (){
    animateCounter ++;
    var start = new Date($scope.startDate);
    var end = new Date($scope.endDate);
    var diff =  Math.abs(end-start);
    var diffCalc = ((((diff/1000)/60)/60)/24);
    $scope.days = diffCalc;
    if (animateCounter > 2) {
      $scope.animateClass = "usePulse";
      $timeout(function removeAnimate(){
        $scope.animateClass = "";
      }, 1000);
    }
  };

  $scope.$watch('endDate', function (newValue, oldValue, scope) {
    $scope.calcMyDays();
}, true);

  $scope.$watch('startDate', function(){
    $scope.calcMyDays();
  });

  $scope.enterFunction = function(){
    var start = new Date($scope.startDate).toDateString();
    var end = new Date(start);
    var moreDays = Number($scope.days);
    end.setDate(end.getDate() + moreDays);
    $scope.endDate = new Date(end);
  };

  $scope.showEnterButton = function(){
    $scope.showButton = true;
  };

});//end controller
