var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var twatts = require('./routes/twatts')

var app = express();


app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000)

app.use('/api', twatts)

module.exports = app
