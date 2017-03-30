var myOauth = require('../config/twitter')
require('dotenv').config()


module.exports = {
  getTwit : function(req, res){
    let search = req.query.q
    search = search.split(' ').join('%20')
    console.log(search);
    myOauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q='+search,
    process.env.USER_TOKEN ,
    process.env.USER_SECRET ,
    function(e, data){
    	if(e) console.error(e)
        // let crawler = (require('util').inspect(data))
       res.json(JSON.parse(data))

    })
  },

  getTag : function(req, res){
    let search = req.query.q
    search = search.split(' ').map(kata => {
      return '%23'+kata
    })
    search.join('+')

    console.log(search);
    myOauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q='+search,
    process.env.USER_TOKEN ,
    process.env.USER_SECRET ,
    function(e, data){
      if(e) console.error(e)
        // let crawler = (require('util').inspect(data))
       res.json(JSON.parse(data))

    })
  }
}
