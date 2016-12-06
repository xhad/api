var path = require('path');
var express = require('express');

var app = module.exports = express();
var server = require('http').Server(app);

var rootPath = path.dirname(__dirname);
var port = Number(process.env.PORT || 9999);


// Configure the socket.io object with our Express app
require('./controllers/web-market-streamer.js')(server);

var marketEngine = require('./marketEngine');
marketEngine.start();

//signin and signup routes
var authRouter = require("./api/auth.js");
app.use('/api/auth', authRouter);

//api routes
var apiRouter = require("./api/v1.js");
app.use('/api/v1', apiRouter);


// TODO: Error Handing here??

server.listen(port, function() {
  console.log('Server listening on port ' + port);
});
