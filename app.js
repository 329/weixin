var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
require('express-namespace');

var env = process.env.NODE_ENV || 'development',
    config = require('./config/config')[env],
    mongoose = require('mongoose');

// Bootstrap db connection
// connect  to nonodb
var connect = function() {
  var options = { server: { socketOptions: { keepAlive: 1 } } }
  mongoose.connect(config.db, options)
}
connect();

mongoose.connection.on("error", function(err) {
    console.log(err);
});

// Reconnect when closed
mongoose.connection.on('disconnected', function () {
  connect()
});

// Bootstrap models
var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('.js')) require(models_path + '/' + file)
})

var app = express();
//express settings
require('./config/express')(app, config);

var router = express.Router();
require('./config/routes')(router);
app.use(router);

module.exports = app;
