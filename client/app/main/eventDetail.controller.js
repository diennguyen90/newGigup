'use strict';


angular.module('diennguyenApp')
	.controller('EventDetailCtrl', function($scope,$routeParams,$http){
		$scope.events = [];
		//gets the data and on success it does a filter on that array to find a matching $routeparam name
		$http.get('/api/events').success(function(events){
			$scope.events = events.filter(function(filterEvents){
				return filterEvents.name === $routeParams.name;
			});
			console.log(events);
		});
	});