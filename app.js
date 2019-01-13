(function(){
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController)
	LunchCheckController.$inject=['$scope'];
	function LunchCheckController($scope){
        $scope.count=0;
        $scope.lunchmenu='';
        $scope.myStyle={"color":"black"};
       
		$scope.CheckIfTooMuch=function(){
        $scope.count++;
        var str=$scope.lunchmenu;
        var arrayOfStrings=str.split(',');
        var le=arrayOfStrings.length;
       /* console.log($scope.lunchmenu);*/
        if(($scope.count==1)&&($scope.lunchmenu=='')){
            $scope.msg='Please enter data first';}
         else if(le<=3){
         	$scope.myStyle={"color":"green","font-size" : "50px"};
         	$scope.msg='Enjoy!';}

         else {
         	$scope.myStyle={"color":"red","font-size" : "40px"};
         	$scope.msg='Too much!';}
           
		};


	}

})();