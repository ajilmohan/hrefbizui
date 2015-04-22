
/****
*   This factory serve calls for cinema.
*
*/


angular.module('bizservice')
	.factory('cinemaService', function($http) {

		var config = {
					/*headers: {
						'X-Parse-Application-Id': 'WiVHbxOmum94S0EiLQ6WTZH3LIxUAEzeU9fhEbxV',
						'X-Parse-REST-API-Key': 'OaFoJjSaTBun4N6zkBet2xizONcGfxB5uLj8UF6z',
					}*/
					//of bizsuit
					/*headers: {
						'X-Parse-Application-Id': 'bNtp8FUfr0s1UsAwJr7MFjabCI31HytIuC3gCaJ2',
						'X-Parse-REST-API-Key': 'g18cAoH7QkrBZenPqH0pynMKsn6pj4MyfDyIy6X1',
					}*/
				};

		return {
			

			getScreensOfCinema : function(callback,cinemaId){
				
				var resp = $http.get('http://localhost:8080/biz-core/rest/cinema/screen/'+cinemaId).success(function(data) {
					callback(data);
				});
			},

			getShowsOfScreen : function(callback,screenId){
				
				var resp = $http.get('http://localhost:8080/biz-core/rest/cinema/'+screenId, config).success(function(data) {
					callback(data);
				});
			},

			
		}
	});