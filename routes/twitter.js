var express = require('express');
var router = express.Router();
var twitter = require('../controllers/twitter')

/* GET users listing. */
router.get('/search/twit',twitter.getTwit)

      .get('/search/hashtag',twitter.getTag)

module.exports = router;
