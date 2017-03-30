const express = require('express');
const router = express.Router()
const twattController = require('../controllers/twatt-controller');


router.get('/search', twattController.twitterSearch)

module.exports = router;
