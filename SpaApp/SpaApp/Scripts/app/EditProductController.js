app.controller("EditProductController", function ($scope, $location, ShareData, ProductService) {
    getProduct();

    function getProduct() {
        var promiseGetProduct = ProductService.getProduct(ShareData.value);

        promiseGetProduct.then(function (pl) {
            $scope.Product = pl.data
        },
              function (errorPl) {
                  $scope.error = 'failure loading Product', errorPl;
              });
    }

    $scope.save = function () {
        var Product = $scope.Product;

        var promisePutProduct = ProductService.put(Product.id, Product);
        promisePutProduct.then(function (pl) {
            $location.path("/ShowAll");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Product', errorPl;
              });
    };

});