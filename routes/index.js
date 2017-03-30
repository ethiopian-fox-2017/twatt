var express = require('express');
var router = express.Router();
var tweet = require('../controller/tweet')


/* GET home page. */
router.get('/tweet/search', tweet.getTweet);


module.exports = router;
