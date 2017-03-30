var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var route=require('./routes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',route)
app.listen(3000)
