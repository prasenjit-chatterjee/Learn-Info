app.controller('ShowProductsController', function ($scope, $location, ProductService, ShareData) {
    loadAllProductsRecords();

    function loadAllProductsRecords() {
        var promiseGetProduct = ProductService.getProducts();

        promiseGetProduct.then(function (pl) { $scope.Products = pl.data },
              function (errorPl) {
                  $scope.error = errorPl;
              });
    }

    //To Edit Product Information  
    $scope.editProduct = function (ProductID) {
        ShareData.value = ProductID;
        $location.path("/Edit");
    }

    //To Delete a Product  
    $scope.deleteProduct = function (ProductID) {
        ShareData.value = ProductID;
        $location.path("/Delete");
    }
});

