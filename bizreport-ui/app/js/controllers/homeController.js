

angular.module('bizcontroller')
	.controller('homeController', function($scope, uiConfig, $location, $rootScope ) {
		
		$rootScope.showmenu = false;

		$scope.getView = function(view) {
			
			if(view == 'postshow'){
				$location.path("/postshow");
			}else if (view == 'dashboard'){
				$location.path("/dashboard");
			}else if(view == 'editshow'){
				$location.path("/dashboard");
			}else if(view == 'settings'){
				$location.path("/settings");
			}else if(view == 'report'){
				$location.path("/report");
			}

		}


		/*$scope.getDashboardView = function(view) {
			$location.path("/dashboard");
		}
*/

	});