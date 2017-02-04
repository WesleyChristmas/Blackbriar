var app = angular.module('profileApp', []);

app.controller('ProfileController', function($scope, $interval) {
	$scope.Profile = new ProfileManager;

	$scope.AcceptOrder = function() {
		var elem = $('.wrap_head');

		if (!elem.hasClass('wrap_head_other')) {
			elem.addClass('wrap_head_other');
			$scope.Profile.Orders.update_status(1);

			var temp = new Date();
			temp.setSeconds(temp.getSeconds() + 10);
			//temp.setDate(temp.getDate() + 2);

			var interval = setInterval(function(){
				var t = $scope.Profile.Timer.getTimeRemaining(temp.getTime());
				if (t <= 0){
					clearInterval(interval);
					$scope.Profile.Timer.set_result('Идет показ площадки!');
					$scope.Profile.Orders.updateEventStatus();
					$scope.$apply();
				}
				$scope.$apply();
			}, 1000);
		}
	};

	$scope.SetCach = function() {
		$scope.Profile.Orders.update_status(2);

		var temp = new Date();
		temp.setSeconds(temp.getSeconds() + 10);
		//temp.setDate(temp.getDate() + 2);

		var interval = setInterval(function(){
			var t = $scope.Profile.Timer.getTimeRemaining(temp.getTime());
			if (t <= 0){
				clearInterval(interval);
				$scope.Profile.Timer.set_result('Жизнь за Нерзула!');
				$scope.Profile.Orders.updateEventStatus();
				$scope.$apply();
			}
			$scope.$apply();
		}, 1000);
	};

	console.log($scope.Profile);
});