var WebSocketServer = require('websocket').server;
var express         = require('express');
var app             = express();
var server          = app.listen(80);
var wsServer        = new WebSocketServer({ httpServer : server });

app.use("/", express.static('client/public'));

wsServer.on('request', function(request) {
    var connection = request.accept('echo-protocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');
});
