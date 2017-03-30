var OAuth = require('oauth');

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  `${process.env.CONSUMER_KEYS}`, //dari twitter credential apps = gunakan .env
  `${process.env.APP_SECRET_KEYS}`, //dari twitter credential apps = gunakan .env
  '1.0A',
  null,
  'HMAC-SHA1'
);

module.exports = oauth
