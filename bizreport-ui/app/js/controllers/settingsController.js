


angular.module('bizcontroller')
	.controller('settingsController', function($scope, uiConfig, commonService, settingsService ,  postShowService, $location, $rootScope , $interval) {
		
		$scope.init = function(){
			
			$scope.oneAtATime = true;
			$scope.cinema  = commonService.getCinema();
			$scope.screen = {};
			$scope.screen.shows = [];
			$scope.screen.classes = [];

			$scope.screens = [];

			$scope.selectedScreen = {};
			

			settingsService.getSettingsMasterData(function(data){
					
					$scope.shows = data.cinema.shows;
					$scope.classes = data.classes;
					//console.log('Data : ' +$scope.shows )
					
			});

			settingsService.getScreensOfCinema(function(data1){
					$scope.screens = data1.screens;
					
			});

		}


		$scope.getSelectedScreenDet = function(screen){
			debugger;

			$scope.showsOfScreen = screen.shows;
			$scope.classesOfScreen = screen.classes;
		}


		$scope.addShow = function(show , selected){
			
			show.selected = selected;
			if(show.selected){
				$scope.screen.shows.push(show);
			}else{
				var index = $scope.screen.shows.indexOf(show)
  				$scope.screen.shows.splice(index, 1); 
			}
		}

		$scope.addClass = function(sclass , selected){
			debugger;
			if(selected){
				$scope.screen.classes.push(sclass);
			}else{
				var index = $scope.screen.classes.indexOf(sclass)
  				$scope.screen.classes.splice(index, 1); 
			}
		}

		$scope.init();

	});