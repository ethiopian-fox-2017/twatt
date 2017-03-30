const express = require('express');
const router = express.Router();
const helper = require ('../helpers/twitter');


router.get('/tweet/:q', helper.twitterOauth)

module.exports = router;
