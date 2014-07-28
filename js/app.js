var app = angular.module('HearthstoneHelper', []);

function SearchCtrl($scope, $http){
	
	$http.get('data/all-cards.json').success(function(data) {
		$scope.cards = data;
    }); 	
}
