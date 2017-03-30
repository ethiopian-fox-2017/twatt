var express = require('express');
var router = express.Router();
require('dotenv').config();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send('Welcome');
// });

var OAuth = require('oauth');

router.get('/tweet/search/:q', function(req, res, next){
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    // 'your application consumer key',
    process.env.APPCONSUMERKEY,
    // 'your application secret',
    process.env.APPSECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  );
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.q}`,
    // 'your user token for this app', //test user token
    process.env.USERTOKEN,
    // 'your user secret for this app', //test user secret
    process.env.USERSECRET,
    function (e, data){
      if (e) console.error(e);
      res.send(data)
    });
})



module.exports = router;
