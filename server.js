const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()

app.engine('handlebars', expressHandlebars())
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', function(req, res) {
  res.render('home')
})

const PORT = 3000
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})
