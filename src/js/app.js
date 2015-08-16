var app = angular.module('landingApp', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.

            when('/contattami', {
                templateUrl: 'views/form.html',
                controller: 'ContactController'
            }).
            otherwise({
                templateUrl: 'views/about.html'
            });
    }])


    
