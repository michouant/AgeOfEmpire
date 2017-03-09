
var app = angular.module('store',[]);




 app.controller('storeController',[
	'$scope','$http',
	function($scope,$http){
		//$scope!=this;
		$scope.product={
			reviews:[]
		};
		
		$http.get('data/AgeOfEmpireBat.json')
			.success(function(data){
				$scope.product.reviews=data;
			})
			.error(function(){
				console.log("error loading AgeOfEmpireBat.json");
			});
		
		return angular.extend($scope, this);
	}
]);