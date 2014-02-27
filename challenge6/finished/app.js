var express = require('express'), 
    http = require('http'),
    path = require('path'),
    browserify = require('browserify-middleware');

var app = express();

app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
    app.use(express.errorHandler());
});

// Configure Browserify middleware
var browserifySrc = path.join(process.cwd(), 'browser.js');
app.use('/middleware.js', browserify(browserifySrc));

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});