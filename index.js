var app = angular.module('app',['ngRoute']);

app
	.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/',{templateUrl:'views/index.html'});
		$routeProvider.when('/getting-started',{templateUrl:'views/getting-started.html'});
		$routeProvider.when('/modules',{templateUrl:'views/modules.html'});
		$routeProvider.otherwise({redirectTo:'/'});
	}])
	.directive('jeffyNavigation',['$location',function($location){
		return {
			restrict: 'A',
			link: function (scope,element,attributes) {
				scope.$on('$locationChangeSuccess',function(){
					var children = element.children()
					children.find('a').parent().removeClass('active');
					children.find('a[href="#'+$location.path()+'"]').parent().addClass('active');
				});
			}
		};
	}])
;