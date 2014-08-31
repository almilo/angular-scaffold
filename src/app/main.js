angular.module('app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                template: '<div>This is home!!</div>'
            })
            .when('/page1', {
                template: '<div>This is page 1!!</div>'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });
