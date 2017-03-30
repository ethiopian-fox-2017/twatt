const express = require('express');
const app = express();

const index = require("./routes/index");
const twitter = require("./routes/twitter");

app.use("/", index);
app.use("/twitter", twitter);

app.listen(3000, () => {
  console.log(`Server started!`);
})
