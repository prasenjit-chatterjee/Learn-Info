app.controller("DeleteProductController", function ($scope, $location, ShareData, ProductService) {

    getProduct();
    function getProduct() {

        var promiseGetProduct = ProductService.getProduct(ShareData.value);


        promiseGetProduct.then(function (pl) {
            $scope.Product = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loading Product', errorPl;
              });
    }

    $scope.delete = function () {
        var promiseDeleteProduct = ProductService.delete(ShareData.value);

        promiseDeleteProduct.then(function (pl) {
            $location.path("/ShowAll");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Product', errorPl;
              });
    };

});