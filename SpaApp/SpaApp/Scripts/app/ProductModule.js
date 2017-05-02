var app = angular.module('ProductModule', ['ngRoute']);

app.factory("ShareData", function () {
    return { value: 0 }
});

//Showing Routing  
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/',
                        {
                            templateUrl: 'Home/Home',
                            controller: 'HomeController'
                        });
    $routeProvider.when('/ShowAll',
                        {
                            templateUrl: 'Product/ShowAll',
                            controller: 'ShowProductsController'
                        });
    $routeProvider.when('/Add',
                        {
                            templateUrl: 'Product/Add',
                            controller: 'AddProductController'
                        });
    $routeProvider.when('/Edit',
                        {
                            templateUrl: 'Product/Edit',
                            controller: 'EditProductController'
                        });
    $routeProvider.when('/Delete',
                        {
                            templateUrl: 'Product/Delete',
                            controller: 'DeleteProductController'
                        });
    $routeProvider.otherwise(
                        {
                            redirectTo: '/'
                        });

    $locationProvider.html5Mode(true).hashPrefix('!');
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
}]);