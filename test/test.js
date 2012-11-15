var express = require('express')
var frequire = require('frequire')
var app = express()

delete frequire.styles.node
var f = frequire(__dirname + '/../')
f.require('pretty-checkable')

app.use(f.middleware())

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html')
})

app.listen(8080, 'localhost')
