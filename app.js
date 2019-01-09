const express = require('express')
const app = express()
var hbs = require('express-handlebars')
var MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')

app.set('view engine', 'hbs')
app.engine('hbs', hbs( {
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: __dirname + '/views',
}))

mongoose.connect(process.env.DB_HOST+"/"+process.env.DB_NAME, { useNewUrlParser: true })

app.listen(4000, function () {
  console.log('Example app listening on port 4000')
})