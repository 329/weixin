
/**
 * Module dependencies.
 */

var express = require('express'),
  compress = require('compression'),
  session = require('express-session'),
  mongoStore = require('connect-mongo')(session),
  flash = require('connect-flash'),
  helpers = require('view-helpers'),
  pkg = require('../package.json'),
  favicon = require('static-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser');
  bodyParser = require('body-parser');

var env = process.env.NODE_ENV || 'development'

module.exports = function (app, config) {

  app.set('showStackError', true);

  // should be placed before express.static
  app.use(compress({
    filter: function (req, res) {
      return /json|text|javascript|css/.test(res.getHeader('Content-Type'))
    },
    level: 9
  }));

  app.use(express.static(config.root + '/public'));
  app.use(favicon());
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());
  app.use(cookieParser());
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'jade');
  app.set('view cache', false);

  // expose package.json to views
  app.use(function (req, res, next) {
    res.locals.pkg = pkg
    next()
  });

  app.use(require('express-method-override')());

  // express/mongo session storage
  app.use(session({
    secret: pkg.name,
    store: new mongoStore({
      url: config.db,
      collection : 'sessions'
    })
  }));

  // connect flash for flash messages - should be declared after sessions
  app.use(flash())

  // should be declared after session and flash
  app.use(helpers(pkg.name))

  // adds CSRF support
  // if (process.env.NODE_ENV !== 'test') {
  //   app.use(express.csrf())

  //   // This could be moved to view-helpers :-)
  //   app.use(function(req, res, next){
  //     res.locals.csrf_token = req.csrfToken()
  //     next()
  //   })
  // }

  // routes should be at the last
  //app.use(app.router)

  // assume "not found" in the error msgs
  // is a 404. this is somewhat silly, but
  // valid, you can do whatever you like, set
  // properties, use instanceof etc.
  app.use(function(err, req, res, next){
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next()
    }

    // log it
    // send emails if you want
    console.error(err.stack)

    // error page
    res.status(500).render('500', { error: err.stack })
  })

    // assume 404 since no middleware responded
  app.use(function(req, res, next){
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    })
  })

}
