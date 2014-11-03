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
});