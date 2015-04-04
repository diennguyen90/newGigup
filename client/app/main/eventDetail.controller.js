'use strict';


angular.module('diennguyenApp')
	.controller('EventDetailCtrl', function($scope,$routeParams,$http){
		$scope.events = []

		$http.get('/api/events').success(function(events){
			$scope.events = events.filter(function(filterEvents){
				return filterEvents.name === $routeParams.name
			})
			console.log(events);
		});
	});