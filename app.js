const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const index = require('./routes/index');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

app.listen('3000')