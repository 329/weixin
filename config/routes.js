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

module.exports = function (router) {
  var hello = require('../app/controllers/hello');
  // user routes
  // app.get('/login', users.login)
  // app.get('/signup', users.signup)
  // app.get('/logout', users.logout)

  // home route
  router.get('/', hello.index);



  router.use(function(err, req, res, next){
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
  router.use(function(req, res, next){
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    })
  })

}
