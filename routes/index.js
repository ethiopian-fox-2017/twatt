const express = require('express');
const router = express.Router();
const OAuth = require('oauth');

router.get('/', function(req, res, next) {
  res.send('Welcome to Twatt')
})

router.get('/search', function(req, res, next) {

  let q = encodeURIComponent(req.query.q)
  // let q = req.query.q.replace(/\s/, '+')
  // let qstr = q.split('+').map(str => '%23'+str).join('+')

  let oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.TWITTER_API_KEY,
        process.env.TWITTER_API_SECRET,
        '1.0A',
        null,
        'HMAC-SHA1'
      );
      oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${q}`,
        process.env.TWITTER_ACCESS_TOKEN,
        process.env.TWITTER_ACCESS_TOKEN_SECRET,
        function (e, data){
          if (e) console.error(e);
          res.send(JSON.parse(data))
        });
})

module.exports = router