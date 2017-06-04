var express = require('express')
var path = require('path')
var app = express();
var http = app;//require('http').Server(app);
var apiUri = '/api/ProductApi';
var apiUri_Home = '/api/HomeApi';
var MongoClient = require('mongodb').MongoClient;
//var mongodbUri = "mongodb://prasenjit2564:<PASSWORD>@clustermute-shard-00-00-yrp4u.mongodb.net:27017,clustermute-shard-00-01-yrp4u.mongodb.net:27017,clustermute-shard-00-02-yrp4u.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=ClusterMute-shard-0&authSource=admin";
var productModule = require(__dirname + '/Modules/ProductModule.js');
var productRepo = require(__dirname + '/Modules/ProductRepo.js');
var actionCommand = require(__dirname + '/Modules/ActionCommand.js');
//require(__dirname + '/Modules/WebSocketServer.js');
//var mongodbUri = "mongodb://localhost/productDb";
//MongoClient.connect(mongodbUri, function (err, db) {
//    db.close();
//});

app.use("/Home", express.static(__dirname + '/Contents/views/Home'));
app.use("/Product", express.static(__dirname + '/Contents/views/Product'));
app.use("/css", express.static(__dirname + '/Contents/css'));
app.use("/fonts", express.static(__dirname + '/Contents/fonts'));
app.use("/js", express.static(__dirname + '/Contents/js'));
var i = 1;
var c = 1;

//-------------

var WebSocketServer = require('websocket').server;
app.post(apiUri_Home, function (req, res) {
    console.log("Home Post");    
    Broadcast(actionCommand.Room1_Light1);
});

app.get(apiUri, function (req, res) {
    console.log("Got a GET request for the homepage");
    //res.send('Hello GET');
    var hh = productRepo.FindAll();
    Broadcast();
});

app.post(apiUri, function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
});

app.delete(apiUri + '/:id', function (req, res) {
    console.log("Got a DELETE request for " + req.params.id);
    res.send('Hello DELETE');
});

app.put(apiUri + '/:id', function (req, res) {
    console.log("Got a GET request for " + req.params.id);
    res.send('Page Listing');
});

app.get(apiUri + '/:id', function (req, res) {
    console.log("Got a GET request for" + req.params.id);
    res.send('Page Pattern Match');
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/Contents/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

var port = process.env.port || 8080;
var server = http.listen(port, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
//io = io.listen(server);
wsServer = new WebSocketServer({
    httpServer: server   
});

var connections = [];

wsServer.on('request', function (request) {
    var connection = request.accept(null, request.origin);
    console.log("ws server started")
    connections.push(connection);
    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            connection.sendUTF(
                JSON.stringify({ type: 'history', data: 'history' }));
        }
    });

    connection.on('close', function (connection) {
        // close user connection
    });
});

function Broadcast(message) {
    if (message) {
        for (var i = 0; i < connections.length; i++) {
            connections[i].sendUTF(message);
        }
    }
}