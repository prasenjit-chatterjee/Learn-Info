//var app = angular.module('MainModule', ['ui.router.state', 'ui.router', 'ncy-angular-breadcrumb', 'angularFileUpload', 'FileUploaderWidget']);
var app = angular.module('MainModule', ['ui.router.state', 'ui.router', 'ncy-angular-breadcrumb', 'ngPageTitle']);

app.factory("ShareData", function () {
    return { value: 0 }
});

app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider.state('Home',
                        {
        url: '/',
        views: {
            '': { templateUrl: 'Home/Home.html' },
                                //Tested multiple view in a controller
                                //'Test': { templateUrl: 'Home/Manage' }
        },
        controller: 'HomeController',
        ncyBreadcrumb: {
            label: 'Home',
        },
        data: {
            pageTitle: "Home"
        }
    }).state('ShowAllProducts',
                        {
        url: '/ShowAll',
        templateUrl: 'Product/productList.html',
        controller: 'ShowProductsController',
        ncyBreadcrumb: {
            label: 'Product List',
            parent: "Home"
        },
        data: {
            pageTitle: "Product List"
        }
    }).state('AddProduct',
                        {
        url: '/Add',
        templateUrl: 'Product/Add',
        ////There is an issue with muliple view
        //views: {
        //    '': { templateUrl: 'Product/Add' },
        //    //'Test': { templateUrl: 'Home/FileUpload' }
        //},
        controller: 'AddProductController',
        ncyBreadcrumb: {
            label: 'Add a Product',
            parent: "Home"
        }
    }).state('EditProduct',
                        {
        url: '/Edit',
        templateUrl: 'Product/Edit',
        controller: 'EditProductController',
        ncyBreadcrumb: {
            label: 'Edit : {{Product.name|uppercase}}',
            parent: "ShowAllProducts"
        }
    }).state('DeleteProduct',
                        {
        url: '/Delete',
        templateUrl: 'Product/Delete',
        controller: 'DeleteProductController',
        ncyBreadcrumb: {
            label: 'Delete : {{Product.name|uppercase}}',
            parent: "ShowAllProducts"
        }
    });
    $locationProvider.html5Mode(true).hashPrefix('!');
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
    $urlRouterProvider.otherwise('/');
});