

var app = angular.module('store',[]);

app.controller('ReviewController',function(){
	var scope=this;
	this.review={};
	this.addReview=function(product){
		scope.review.createdOn = Date.now();
		product.reviews.push(scope.review);
		scope.review={};
	};
});

app.controller('storeController',['$http','$scope',function($http,$scope){
	//this.product={
	//	reviews:[]
	//};
	
	$scope.product={
		reviews:[]
	}
	$http.get('data/comments.json')
		.success(function(data){
			$scope.product.reviews=data;
		})
		.error(function(){
			console.log("Error loading comments.json");
		});
	
	return angular.extend($scope, this);
}]);


