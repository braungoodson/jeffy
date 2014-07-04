var app = angular.module('app',['ngRoute']);

app
	.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/',{templateUrl:'views/index.html'});
		$routeProvider.when('/getting-started',{templateUrl:'views/getting-started.html'});
		$routeProvider.otherwise({redirectTo:'/'});
	}])
;