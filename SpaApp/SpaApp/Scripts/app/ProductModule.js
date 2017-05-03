﻿var app = angular.module('ProductModule', ['ui.router.state', 'ui.router', 'ncy-angular-breadcrumb']);

app.factory("ShareData", function () {
    return { value: 0 }
});

app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider.state('Home',
                        {
                            url: '/',
                            templateUrl: 'Home/Home',
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