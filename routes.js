var express = require('express');
var router = express.Router();
var helper = require('./helper');
router.get('/',function(req,res){
  res.send('alive')
})
router.post('/search',function(req,res){
   helper.searchTwat(req.body.keyword,res);
})
router.get('/userrecent',function(req,res){
   helper.timelineTwat(res);
})
router.get('/hometimeline',function(req,res){
   helper.home(res);
})
module.exports=router
