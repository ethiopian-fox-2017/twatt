const express = require('express');
const index  = require('./routes/index');
const bodyParser = require('body-parser');
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', index)

app.listen(3000, function() {
  console.log("Server Jalan");
})
