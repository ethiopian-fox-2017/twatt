var express = require('express');
var router = express.Router();
var OAuth = require('oauth');
require('dotenv').config();

router.get('/', function(req, res, next) {
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.APPLICATION_SECRET,
      '1.0A',
      null,
      process.env.SECRET_WORD
    );
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=jakarta',
      process.env.USER_TOKEN, //test user token
      process.env.USER_SECRET, //test user secret
      function (e, data){
        if (e) console.error(e);
          res.send(data)
      });
});

module.exports = router;