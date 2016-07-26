'use strict'

DateApp.controller('dateCtrl', function($scope){
  console.log('in controller');
  var today = new Date().toDateString();
  $scope.startDate = new Date(today);
  $scope.endDate = new Date(today);



  $scope.calcMyDays = function (){
    // var start = $scope.startDate;
    // var end =  $scope.endDate;
    var start = new Date($scope.startDate);
    var end = new Date($scope.endDate);

    var diff =  Math.abs(end-start);
    var diffCalc = ((((diff/1000)/60)/60)/24);
    // console.log('diffCalc', diffCalc);
    // diffCalc = Math.abs(diffCalc);
    $scope.days = diffCalc;
  };

  $scope.$watch('endDate', function(){
    $scope.calcMyDays();
  });
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


  //  var futureDay = new Date(+start);
  //  futureDay.setDate(futureDay.getDate() + daysIntoFuture);
  //   console.log('futureDay',futureDay.toDateString('MM/dd/yyyy'));






});//end controller
