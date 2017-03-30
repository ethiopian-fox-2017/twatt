const express = require('express');
const OAuth = require('oauth');
require('dotenv').config();

let searchSearch = (req, res) => {
  let oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.CONSUMER_KEY,
  process.env.APPLICATION_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);
oauth.get(
  'https://api.twitter.com/1.1/search/tweets.json?q='+req.params.search,
  process.env.USER_TOKEN,
  process.env.USER_SECRET,
  (err, data) => {
    res.send(data)
  });
}

module.exports = {
  searchSearch
}
