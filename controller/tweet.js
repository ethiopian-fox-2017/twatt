var OAuth = require('oauth');
require('dotenv').config();
var oauth = require('../config/config')
var tweet={}

tweet.getTweet = function(req,res,next) {
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.q}`,
    `${process.env.APP_TOKEN}`, //test user token dari twitter credential apps = gunakan .env
    `${process.env.USER_SECRET_TOKEN}`, //test user secret dari twitter credential apps = gunakan .env
    function (e, data){
    if (e) console.error(e);
    // console.log(require('util').inspect(data));
    // done();
    res.send(JSON.parse(data))
  });
}

module.exports = tweet
