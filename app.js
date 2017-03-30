const express = require('express');
const app = express();
const oauth = require('oauth');
require('dotenv').config()

var myOauth = new oauth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.CONSUMER_KEY,
  process.env.CONSUMER_SECRET,
  '1.0',
  'http://127.0.0.1:3000/twitter/callback',
  'HMAC-SHA1',
  null
);
app.get('/search', (req, res) => {
  myOauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.q}`,
        process.env.TOKEN, //test user token
        process.env.TOKEN_SECRET, //test user secret
        function(e, data) {
          if (e) console.error(e);
          res.send(data);
          // console.log(require('util').inspect(data));
          // done();

        }
  )
})






app.listen(3000);


