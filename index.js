var express = require('express')
var app = express()
 
app.get('/hello', function (req, res) {
  res.send('Hello World')
})

app.get('', function (req, res) {
  res.send('Hello World')
})

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(80);