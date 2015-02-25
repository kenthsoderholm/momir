angular.module('app').controller("MainController", function($http, $filter, $scope) {
	var mc = this;
	mc.allCards = null;
	$http.get('http://mtgjson.com/json/AllCards.json').success(function(data) {
		mc.allCards = data;
	});
	mc.cardList = [];

	mc.doClickCreature = function($value) {
		$scope.returnCards = [];
		angular.forEach(mc.allCards, function(data) {
			$scope.card = data;
			if (data.cmc == $value) {
				angular.forEach(data.types, function(type){
					if (type == 'Creature' && $scope.card.layout != 'flip' && type != "Enchant") {
						$scope.returnCards.push($scope.card);
					}
				})
			}
			
		})
		var numberOfCards = $scope.returnCards.length;
		var whichCard = Math.floor(Math.random() * numberOfCards);
		mc.cardList.unshift($scope.returnCards[whichCard]);
		if (mc.cardList.length > 10) {
			mc.cardList.pop();
		}
		return $scope.returnCards[whichCard];
	}
	mc.doClickSpell = function($value) {
		$scope.cards = [];
		angular.forEach(mc.allCards, function(data) {
			if (data.type == $value) {
				$scope.cards.push(data);
			}
		})
		var numberOfCards = $scope.cards.length;
		var cardOne 			= Math.floor(Math.random() * numberOfCards);
		var cardTwo				= Math.floor(Math.random() * numberOfCards);
		var cardThree 		= Math.floor(Math.random() * numberOfCards);
		var returnCards 	= [$scope.cards[cardOne], $scope.cards[cardTwo], $scope.cards[cardThree]];
		return returnCards;
	}
})