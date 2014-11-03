angular.module('F1StatsApp.controllers', []).controller('driversController', function($scope, ergastAPIservice) {
	$scope.nameFilter = null;
	$scope.driversList = [];
	$scope.searchFilter = function(driver) {
		var keyword = new RegExp($scope.nameFilter, 'i');
		return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
	};
	ergastAPIservice.getDrivers('2014').success(function(response) {
		document.getElementById('loading-gif').style.display = 'none';
		$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	});
}).controller('driverController', function($scope, $routeParams, ergastAPIservice) {
	$scope.id = $routeParams.id;
	$scope.races = [];
	$scope.driver = null;
	ergastAPIservice.getDriverDetails($scope.id).success(function(response) {
		$scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
	});
	ergastAPIservice.getDriverRaces($scope.id).success(function(response) {
		$scope.races = response.MRData.RaceTable.Races;
	});
}).controller('teamController', function($scope, $routeParams, ergastAPIservice) {
	$scope.id = $routeParams.id;
	$scope.team = null;
	ergastAPIservice.getTeamDetails($scope.id).success(function(response) {
		$scope.team = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0];
	});
});