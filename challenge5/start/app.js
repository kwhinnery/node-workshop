var express = require('express'), 
    http = require('http'), 
    path = require('path')
    io = require('socket.io');

var app = express();

app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
    app.use(express.errorHandler());
});

// Set up express
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});

// Set up socket.io
var io = require('socket.io').listen(server);

// Handle socket traffic
io.sockets.on('connection', function (socket) {
    // Relay chat data to all clients
    socket.on('chat', function(data) {
        socket.emit('chat',data);
        socket.broadcast.emit('chat', data);
    });
});