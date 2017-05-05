var app = angular.module('ProductModule', ['ui.router.state', 'ui.router', 'ncy-angular-breadcrumb', 'angularFileUpload']);

app.factory("ShareData", function () {
    return { value: 0 }
});

app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider.state('Home',
                        {
                            url: '/',
                            views: {
                                '': { templateUrl: 'Home/Home' },
                                //Tested multiple view in a controller
                                //'Test': { templateUrl: 'Home/Manage' }
                            },
                            controller: 'HomeController',
                            ncyBreadcrumb: {
                                label: 'Home',
                            }
                        }).state('ShowAllProducts',
                        {
                            url: '/ShowAll',
                            templateUrl: 'Product/ShowAll',
                            controller: 'ShowProductsController',
                            ncyBreadcrumb: {
                                label: 'Product List',
                                parent: "Home"
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
    //$locationProvider.html5Mode(true).hashPrefix('!');
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
    $urlRouterProvider.otherwise('/');
});