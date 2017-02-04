var app = angular.module('homeApp', []);

app.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$parent.$last === true) {
                $timeout(function () {
                    scope.$emit(attr.onFinishRender);
                });
            }
        }
	}
});

app.controller('HomeController', function($scope) {
	
	$scope.$on('ngRepeatFinished', function(e){
		console.log(e);
		console.log('good to go');
	});
	
	var result = [
		{
			IdRecord : 0,
			Photo : 'img/loft.jpg',
			Title : 'Пати-кафе на Черкизовской',
			Price : 2000,
			MaxPeople: 50,
			VIP : false,
			Hot : true,
			Food : true,
			Taxi : true,
			Music : true,
			Liked : true,
		},
		{
			IdRecord : 1,
			Photo : 'img/loft.jpg',
			Title : 'Пати-кафе на Черкизовской',
			Price : 2000,
			MaxPeople: 50,
			Hot : true,
			Liked : false,
			VIP : false,
			Food : true,
			Taxi : true,
			Music : true,
		},
		{
			IdRecord : 2,
			Photo : 'img/loft.jpg',
			Title : 'Пати-кафе на Черкизовской',
			Price : 2000,
			MaxPeople: 50,
			Hot : true,
			Liked : false,
			VIP : false,
			Food : true,
			Taxi : true,
			Music : true,
		},
		{
			IdRecord : 3,
			Photo : 'img/loft.jpg',
			Title : 'Пати-кафе на Черкизовской',
			Price : 2000,
			MaxPeople: 50,
			Hot : true,
			Liked : false,
			VIP : false,
			Food : true,
			Taxi : true,
			Music : true,
		},
		{
			IdRecord : 4,
			Photo : 'img/loft.jpg',
			Title : 'Пати-кафе на Черкизовской',
			Price : 2000,
			MaxPeople: 50,
			Hot : true,
			Liked : true,
			VIP : false,
			Food : true,
			Taxi : true,
			Music : true,
		},
		{
			IdRecord : 5,
			Photo : 'img/loft.jpg',
			Title : 'Современный лофт на Чистых прудах',
			Price : 3000,
			MaxPeople: 30,
			Hot : true,
			Liked : false,
			VIP : false,
			Food : true,
			Taxi : true,
			Music : true,
		},
		{
			IdRecord : 6,
			Photo : 'img/loft.jpg',
			Title : 'Пати-кафе на Черкизовской',
			Price : 2000,
			MaxPeople: 50,
			Hot : true,
			Liked : false,
			VIP : true,
			Food : true,
			Taxi : true,
			Music : true,
		},
		{
			IdRecord : 7,
			Photo : 'img/loft.jpg',
			Title : 'Пати-кафе на Черкизовской',
			Price : 2000,
			MaxPeople: 50,
			Hot : true,
			Liked : true,
			VIP : false,
			Food : true,
			Taxi : true,
		},
		{
			IdRecord : 8,
			Photo : 'img/loft.jpg',
			Title : 'Пати-кафе на Черкизовской',
			Price : 2000,
			MaxPeople: 50,
			Hot : true,
			Liked : true,
			VIP : false,
			Food : true,
			Taxi : true,
		},
		{
			IdRecord : 9,
			Photo : 'img/loft.jpg',
			Title : 'Пати-кафе на Черкизовской',
			Price : 2000,
			MaxPeople: 50,
			Hot : true,
			Liked : true,
			VIP : false,
			Food : true,
			Taxi : true,
		},
		{
			IdRecord : 10,
			Photo : 'img/loft.jpg',
			Title : 'Пати-кафе на Черкизовской',
			Price : 2000,
			MaxPeople: 50,
			Hot : true,
			Liked : true,
			VIP : false,
			Food : true,
			Taxi : true,
		},
		{
			IdRecord : 11,
			Photo : 'img/loft.jpg',
			Title : 'Пати-кафе на Черкизовской',
			Price : 2000,
			MaxPeople: 50,
			Hot : true,
			Liked : false,
			VIP : false,
			Food : true,
			Taxi : true,
		},
		{
			IdRecord : 12,
			Photo : 'img/loft.jpg',
			Title : 'Пати-кафе на Черкизовской',
			Price : 2000,
			MaxPeople: 50,
			Hot : true,
			Liked : false,
			VIP : false,
		},
		{
			IdRecord : 13,
			Photo : 'img/loft.jpg',
			Title : 'Пати-кафе на Черкизовской',
			Price : 2000,
			MaxPeople: 50,
			Hot : true,
			Liked : false,
			VIP : false,
		},
		{
			IdRecord : 14,
			Photo : 'img/loft.jpg',
			Title : 'Современный лофт на Чистых прудах',
			Price : 3000,
			MaxPeople: 30,
			Hot : true,
			Liked : false,
			VIP : true,
		},
	];
    
	$scope.Result = result;
	console.log($scope.Result);
});
