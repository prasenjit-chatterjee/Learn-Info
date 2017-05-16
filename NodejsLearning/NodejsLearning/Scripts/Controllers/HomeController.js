app.controller('HomeController', function ($scope, $location, HomeService, ShareData) {
    loadHomeRecord();
    
    function loadHomeRecord() {
        var homeInfo = HomeService.getHome();
        
        homeInfo.then(function (pl) { $scope.Products = pl.data },
              function (errorPl) {
            $scope.error = errorPl;
        });
    }
});