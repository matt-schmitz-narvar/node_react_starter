const express = require('express')
const app = express()

app.get('/hello', function (req, res) {
  // res.setHeader('Content-Type', 'application/json');
  res.json("NODE");
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})