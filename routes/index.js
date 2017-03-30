var express = require('express');
var router = express.Router();
var OAuth = require('oauth');

router.get('/', function(req, res, next) {
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'SiYq9nzMC42ewHHOHRlXlvZM4',
      'T5Jk03u3wxAkQKzyJCSMyZJrmsrRY4jWdrerz9jR75tWB2WPzZ',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=jakarta',
      '847288380794716160-qeS9beZxxHAoFQ29Gj2vJwKv9gsAiu6', //test user token
      'ys3t1pocSTtSnS5rtal9Es9q9jPnRsNF5rTjClH1dtP4L', //test user secret
      function (e, data){
        if (e) console.error(e);
          res.send(data)
      });
});

module.exports = router;