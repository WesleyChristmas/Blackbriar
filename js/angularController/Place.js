var app = angular.module('placeApp', []);

app.controller('PlaceController', function($scope) {

	$scope.Place = new PlaceManager;
});
