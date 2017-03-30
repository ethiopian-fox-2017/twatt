const OAuth = require('oauth');
require('dotenv').config()

var twitterSearch = function(req, res) {
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.APP_CONSUMER_KEY,
    process.env.APP_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  );

  oauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q=%23nintendoswitch&result_type=recent',
    process.env.USER_TOKEN,
    process.env.USER_SECRET,
    function (e, data){
      if (e) console.error(e);
      res.send(data)
    }
  );
}

module.exports = {
  twitterSearch
}
