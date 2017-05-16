app.service("ProductService", function ($http) {

    //Read all Products  
    this.getProducts = function () {

        return $http.get("/api/ProductApi");
    };

    //Fundction to Read Product by Product ID  
    this.getProduct = function (id) {
        //return $http.get("/api/ProductApi?id=" + id);
        return $http.get("/api/ProductApi/" + id);
    };

    //Function to create new Product  
    this.post = function (Product) {
        var request = $http({
            method: "post",
            url: "/api/ProductApi",
            data: Product
        });
        return request;
    };

    //Edit Product By ID   
    this.put = function (id, Product) {
        var request = $http({
            method: "put",
            url: "/api/ProductApi/" + id,
            data: Product
        });
        return request;
    };

    //Delete Product By Product ID  
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/ProductApi/" + id
        });
        return request;
    };
});
