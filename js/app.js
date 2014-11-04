angular.module('F1StatsApp', [
	'F1StatsApp.services',
	'F1StatsApp.controllers',
	'ngRoute'
]).config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/drivers', {
		templateUrl: 'partials/drivers.html',
		controller: 'driversController'
	}).when('/drivers/:id', {
		templateUrl: 'partials/driver.html',
		controller: 'driverController'
	}).when('/teams/:id', {
		templateUrl: 'partials/team.html',
		controller: 'teamController'
	}).when('/teams', {
		templateUrl: 'partials/teams.html',
		controller: 'teamsController'
	}).otherwise({
		redirectTo: '/drivers'
	});
}]);