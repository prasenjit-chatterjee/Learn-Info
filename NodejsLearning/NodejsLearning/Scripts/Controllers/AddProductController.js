app.controller('AddProductController', function ($scope, ProductService) {
    getProduct();
    function getProduct() {
        $scope.Product = Product;
    }

    $scope.save = function (isValid) {
        if (isValid) {
            var Product = {
                Name: $scope.Product.name,
                Description: $scope.Product.description,
                Quantity: $scope.Product.quantity
            };

            var promisePost = ProductService.post(Product);

            promisePost.then(function (pl) {
                alert("Product Saved Successfully.");
            },
                  function (errorPl) {
                      $scope.error = 'failure loading Product', errorPl;
                  });
        }
    };
});