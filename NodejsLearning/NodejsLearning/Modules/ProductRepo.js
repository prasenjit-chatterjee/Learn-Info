var product = require(__dirname + '/ProductModule.js');
var MongoClient = require('mongodb').MongoClient;
var mongodbUri = "mongodb://localhost/productDb";
var productRepo = (function () {
    
    
    function InsertOne(product) {
        
        
    }
    
    FindAllProduct = function () {
        var productList = [];
        try {
            
            //MongoClient.connect(mongodbUri, function (err, db) {
            //    var ProductList = db.collection('Products').find({});
            //    ProductList.each(function (err, doc) {
            //        if (doc != null) {
            //            productList.push(doc);
            //            console.dir(doc);
            //        }
            //    });
            //    db.close();
            //});
        } catch (e) {
            console.log(e);
        };
        return productList
    };
    
    function UpdateOne(product) {
        MongoClient.connect(mongodbUri, function (err, db) {
            
            
            db.close();
        });
    }
    
    function FindbyId(productId) {
        MongoClient.connect(mongodbUri, function (err, db) {
            
            
            db.close();
        });
    }
    
    function Delete(product) {
        MongoClient.connect(mongodbUri, function (err, db) {
            
            
            db.close();
        });
    }
    
    return {
        //InsertOne: this.InsertOne(product),
        FindAll: function () {
            return FindAllProduct();
        }
        //UpdateOne: this.UpdateOne(product),
        //FindbyId: this.FindbyId(product),
        //Delete: this.Delete(product)
    };
})();


module.exports = productRepo;