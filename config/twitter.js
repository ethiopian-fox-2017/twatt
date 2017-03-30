const oauth = require('oauth')
require('dotenv').config()
var myOauth = new oauth.OAuth(
			'https://api.twitter.com/oauth/request_token',
		'https://api.twitter.com/oauth/access_token',
		process.env.ACCESS_CONSUMER_KEY,
		process.env.CONSUMER_SECRET,
      '1.0',
		'http://localhost:3000/tes',
		'HMAC-SHA1',
		null
)

module.exports = myOauth
