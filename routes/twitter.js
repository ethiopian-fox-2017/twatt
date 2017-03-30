const express = require('express');
const router = express.Router();
const twitterController = require("../controllers/twitter_controller");

router.get("/:search", twitterController.searchSearch)

module.exports = router
