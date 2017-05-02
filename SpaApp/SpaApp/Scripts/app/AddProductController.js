app.controller('AddProductController', function ($scope, ProductService) {
    $scope.id = 0;

    $scope.save = function () {
        var Product = {
            Id: $scope.id,
            Name: $scope.name,
            Description: $scope.description,
            Quantity: $scope.quantity
        };

        var promisePost = ProductService.post(Product);

        promisePost.then(function (pl) {
            alert("Product Saved Successfully.");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Product', errorPl;
              });

    };

});