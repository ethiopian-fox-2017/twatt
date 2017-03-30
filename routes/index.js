var express = require('express');
var router = express.Router()
var OAuth = require('oauth');

require('dotenv').config()

let twitterOauth = function (word,cb) {
  var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.APPLICATION_CONSUMER_KEY,
        process.env.APPLICATION_SECRET,
        '1.0A',
        null,
        'HMAC-SHA1'
      );

  oauth.get(
    // 'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    // 'https://api.twitter.com/1.1/search/tweets.json?f=users&q=hacktiv8&src=typd',
    `https://api.twitter.com/1.1/search/tweets.json?q=${word}`,
    process.env.USER_TOKEN, //test user token
    process.env.USER_SECRET, //test user secret
    function (e, data, res){
      if (e) console.error(e);
      console.log(require('util').inspect(data));
      cb(data)
    });
}

router.get('/search/:word', function (req,res,next) {
  twitterOauth(req.params.word ,function (data) {
    res.send(data)
  })
})


module.exports = router
