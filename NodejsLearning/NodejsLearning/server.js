var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var apiUri = '/api/ProductApi';
//var MongoClient = require('mongodb').MongoClient;
//var mongodbUri = "mongodb://prasenjit2564:<PASSWORD>@clustermute-shard-00-00-yrp4u.mongodb.net:27017,clustermute-shard-00-01-yrp4u.mongodb.net:27017,clustermute-shard-00-02-yrp4u.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=ClusterMute-shard-0&authSource=admin";

//MongoClient.connect(mongodbUri, function (err, db) {
//    db.close();
//});
app.use(express.static('Views'));
app.use(express.static('Scripts'));
app.use(express.static('Contents'));
var i = 1;
var c = 1;

io.on('connection', function (socket) {
    console.log('user connected' + c++);
    io.emit('message', 'You are connected!');
    socket.on('disconnect', function () {
        console.log('user disconnected' + i++);
    });
    socket.on('chatmessage', function (msg) {
        console.log("chatmessage");
        io.emit('chatmessage', msg);
    });
});

app.get(apiUri, function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
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

var port = process.env.port || 1337;
var server = http.listen(port, function () {
    
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
})
io = io.listen(server);
