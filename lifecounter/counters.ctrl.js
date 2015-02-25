angular.module('app').controller("MainController", function($http, $filter, $scope) {
	var mc = this;
	mc.playerOne = 20;
	mc.playerOnePoison = 0;
	mc.playerTwo = 20;
	mc.playerTwoPoison = 0;
})