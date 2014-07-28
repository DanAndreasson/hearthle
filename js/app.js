var app = angular.module('HearthstoneHelper', []);

app.factory('HearthstoneCards', function($http) {
	var HearthstoneCards = {};
	$http.get('data/all-cards.json').success(function(data) {
        HearthstoneCards.cards =  data;
    }); 	
	return HearthstoneCards;
});

	
function SearchCtrl($scope, HearthstoneCards){
	$scope.cards = HearthstoneCards.cards;	
}
