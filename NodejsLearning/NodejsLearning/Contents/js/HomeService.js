app.service("HomeService", function ($http) {
    this.getHome = function () {
        return $http.get("/api/HomeApi");
    };

    this.post = function (trigger) {
        var request = $http({
            method: "post",
            url: "/api/HomeApi",
            data: trigger
        });
        return request;
    };
});