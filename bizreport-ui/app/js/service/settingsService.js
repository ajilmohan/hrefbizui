


angular.module('bizservice')
	.factory('settingsService', function($http) {

		

		return {
			

			getSettingsMasterData: function(callback) {
				
				var resp = $http.get('./data.txt').success(function(data) {
					
					callback(data);
				});
				
			},

			getScreensOfCinema: function(callback){ debugger;

				var resp = $http.get('./datascreen.json').success(function(data) {
					
					callback(data);
				});
			}

		}
	});








