

angular.module('bizcontroller')
	.controller('postShowController', function($scope, uiConfig, commonService,  postShowService, $location, 
		$rootScope , $interval , cinemaService) {
		
		/***
		 * Invoke on initial call of the view or refresh event.
		 * Code has to taken care of refresh event. After refresh , all 
		 * values has to come back on initial state.
		 */

		$scope.init = function(){ 
			
			// Get the selected cinema.
			$scope.cinema = commonService.getCinema();
			$scope.showsToBePost = {};
			
			//Gathered screens of selected cinema.
			cinemaService.getScreensOfCinema(function(screens){
					$scope.screensToProces =  screens;
					
			},1);
		
			
			$scope.selectedScreen = {};
			$scope.filmsOnScreen = {};
			$scope.dateOptions = {
						        changeYear: true,
						        changeMonth: true,
						        yearRange: '1900:-0'
						    };

		}



		$scope.init();

		

		$scope.getShows = function(screen) {
			
				cinemaService.getShowsOfScreen(function(shows){
					$scope.shows = shows;
					$scope.filmsOnScreen  = screen.films;

				},screen.id);
		}


		$scope.populatePostShowForm = function(show){
				/*postShowService.getShow(function(show){
					
					$scope.show = show;
					$scope.facilities = show.facilities;
				});*/
			$scope.facilities = show.facilities;
		}

		$scope.saveRecords = function(){

		}


	});