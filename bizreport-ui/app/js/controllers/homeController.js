

angular.module('bizcontroller')
	.controller('homeController', function($scope, uiConfig, $location, $rootScope ) {
		
		$rootScope.showmenu = false;

		$scope.getPostShowView = function(view) {
			
			if(view == 'postshow'){
				$location.path("/postshow");
			}

		}


		$scope.getDashboardView = function(view) {
			$location.path("/dashboard");
		}


	});