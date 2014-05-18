var async = require('async');

/**
 * Controllers
 */

var auth = require('./middlewares/authorization');

/**
 * Route middlewares
 */

//var articleAuth = [auth.requiresLogin, auth.article.hasAuthorization]
//var commentAuth = [auth.requiresLogin, auth.comment.hasAuthorization]

/**
 * Expose routes
 */

module.exports = function (app) {
  var hello = require('../app/controllers/hello');
  // user routes
  // app.get('/login', users.login)
  // app.get('/signup', users.signup)
  // app.get('/logout', users.logout)

  // home route
  app.get('/', hello.index);

}
