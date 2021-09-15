var express = require('express')
var cors = require('cors')
var routes = require('./routes')
var mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')
require('dotenv').config({ path: '.env' })

var app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use(
    session({
      store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI || 'mongodb://localhost:27017/chatapp',
      }),
      secret: 'chatapp',
      resave: false, // will not resave sessions
      saveUninitialized: true,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
      },
    }),
  )

  app.use('api/v1', routes.chatrooms)

//connection
app.listen(process.env.PORT, () =>
    console.log(`Server is running on port ${process.env.PORT}`),
)   