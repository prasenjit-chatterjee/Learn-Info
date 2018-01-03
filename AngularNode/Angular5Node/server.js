// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//JWT config
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
// Authentication middleware. When used, the
// access token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://zion.auth0.com/.well-known/jwks.json'
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: 'https://zion.auth0.com/',
  algorithms: ['RS256']
});

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', checkJwt, api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Create Socket server.
 */
const WebSocketServer = require('websocket').server;

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

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
      for (i = 0; i < 10; i++) {
        connection.sendUTF(
          JSON.stringify({ type: 'history', data: 'history' })
        );
      }
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