var express = require('express')
var router = express.Router()

app.get('/', function (req, res) {
  res.render('index', { title: 'Register', layout : 'layout' })
})

app.get('/login', function(req, res) {
  res.render('login', { title : 'Login', layout : 'layout'})
})

app.get('/users', function (req, res) {
  res.send('All users')
})