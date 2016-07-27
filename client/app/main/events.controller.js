'use strict';

angular.module('diennguyenApp')

.controller('EventCtrl', function($scope, $http){
	var eventList = [];

	$http.get('/api/events').success(function(eventList){
		$scope.eventList = eventList;
		
	});
	$scope.search = function(){
	$http.get('/api/events/' + $scope.searchBar).success(function (events){
		$scope.events = events;
	});
	};

    $scope.addEvent = function() {
      if($scope.newEventName === '' || $scope.newEventType === '' || $scope.newEventTime === ''|| $scope.newEventAddress === ''|| $scope.newEventDescription === '') {
        return;
      }
      $http.post('/api/events', { name: $scope.newEventName, type: $scope.newEventType, time: $scope.newEventTime, address: $scope.newEventAddress, description: $scope.newEventDescription });

      $scope.newEventName = '';
      $scope.newEventType = '';
      $scope.newEventTime = '';
      $scope.newEventAddress = '';
      $scope.newEventDescription = '';
   };

   // updating events
   $scope.updateEvent = function(event){
   // if(event.Name === '' || event.Type === '' || event.Time === ''|| event.Address === ''|| event.Description === '') {
   //      return;
   //    };
      $http.put('/api/events/' + event._id, { name: event.Type, time: event.Time, address: event.Address, description: event.Description});
      // $http.get('/api/events').success(function(event){
      //   $scope.events =events;
      // })
   };
   //removing from database
   $scope.removeEvent = function(event){
   	$http.delete('/api/events/' + event._id).success(function(){
   		$http.get('/api/events').success(function(events){
   			$scope.events = events;
   		});
   	});
   };
});