let Oauth=require('oauth');
require('dotenv').config()
module.exports={
  searchTwat:function(keyword,res){
    var oauth = new Oauth.OAuth(
     'https://api.twitter.com/oauth/request_token',
     'https://api.twitter.com/oauth/access_token',
     process.env.CONSUMERKEY,
     process.env.APPSECREET,
     '1.0A',
     null,
     'HMAC-SHA1'
   );
   oauth.get(
     `https://api.twitter.com/1.1/search/tweets.json?q=${keyword}`,
     process.env.ACCESSTOKEN, //test user token
     process.env.ACCESSTOKENSEC, //test user secret
     function (e, data, respon){
       //console.log();
       if (e) console.error(e);
       res.send(data);
     });
  },
  timelineTwat:function(res){
    var oauth = new Oauth.OAuth(
     'https://api.twitter.com/oauth/request_token',
     'https://api.twitter.com/oauth/access_token',
     process.env.CONSUMERKEY,
     process.env.APPSECREET,
     '1.0A',
     null,
     'HMAC-SHA1'
   );
   oauth.get(
     `https://api.twitter.com/1.1/statuses/user_timeline.json`,
     process.env.ACCESSTOKEN, //test user token
     process.env.ACCESSTOKENSEC, //test user secret
     function (e, data, respon){
       //console.log();
       if (e) console.error(e);
       res.send(data);
     });
  },
  home:function(res){
    var oauth = new Oauth.OAuth(
     'https://api.twitter.com/oauth/request_token',
     'https://api.twitter.com/oauth/access_token',
     process.env.CONSUMERKEY,
     process.env.APPSECREET,
     '1.0A',
     null,
     'HMAC-SHA1'
   );
   oauth.get(
     `https://api.twitter.com/1.1/statuses/home_timeline.json?count=2`,
     process.env.ACCESSTOKEN, //test user token
     process.env.ACCESSTOKENSEC, //test user secret
     function (e, data, respon){
       //console.log();
       if (e) console.error(e);
       res.send(data);
     });
  },

}
