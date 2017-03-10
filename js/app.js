


var app = angular.module('store', []);


 app.controller('Unit_aoe',[
	'$scope','$http',
	function($scope,$http){
		//$scope!=this;
		$scope.myData={
			reviews:[]
		};
		
		$http.get('data/AgeOfEmpireUnit.json')
			.success(function(data){
				$scope.myData=data;
			})
			.error(function(){
				console.log("error loading AgeOfEmpireUnit.json");
			});
		
		return angular.extend($scope, this);
	}
]);

 app.controller('Batiment_aoe',[
	'$scope','$http',
	function($scope,$http){
		//$scope!=this;
		$scope.myData={
			reviews:[]
		};
		
		$http.get('data/AgeOfEmpireBat.json')
			.success(function(data){
				$scope.myData=data;
			})
			.error(function(){
				console.log("error loading AgeOfEmpireBat.json");
			});
		
		return angular.extend($scope, this);
	}
]);

 app.controller('Civilisation_aoe',[
	'$scope','$http',
	function($scope,$http){
		//$scope!=this;
		$scope.myData={
			reviews:[]
		};
		
		$http.get('data/AgeOfEmpireCiv.json')
			.success(function(data){
				$scope.myData=data;
			})
			.error(function(){
				console.log("error loading AgeOfEmpireCiv.json");
			});
		
		return angular.extend($scope, this);
	}
]);

 app.controller('Technologie_aoe',[
	'$scope','$http',
	function($scope,$http){
		//$scope!=this;
		$scope.myData={
			reviews:[]
		};
		
		$http.get('data/AgeOfEmpireTechnologies.json')
			.success(function(data){
				$scope.myData=data;
			})
			.error(function(){
				console.log("error loading AgeOfEmpireTechnologies.json");
			});
		
		return angular.extend($scope, this);
	}
]);
