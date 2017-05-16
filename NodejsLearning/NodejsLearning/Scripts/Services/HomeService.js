app.service("HomeService", function ($http) {
    this.getHome = function () {
        return $http.get("/api/HomeApi");
    };
});